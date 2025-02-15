package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_"github.com/lib/pq"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/pressly/goose/v3"
)

type Response struct {
    ArchiveURL string `json:"archiveUrl"`
}

var db *sql.DB

func main() {
	dbHost := getEnv("DB_HOST", "localhost")
	dbPort := getEnv("DB_PORT", "5432")
	dbUser := getEnv("DB_USER", "user")
	dbPass := getEnv("DB_PASSWORD", "pass")
	dbName := getEnv("DB_NAME", "containers_db")
	serverPort := getEnv("PORT", "8080")

	dsn := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable",
		dbUser, dbPass, dbHost, dbPort, dbName)

	var err error
	db, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Ошибка sql.Open: %v", err)
	}
	defer db.Close()

	for i := 0; i < 10; i++ {
		err = db.Ping()
		if err == nil {
			break
		}
		time.Sleep(3 * time.Second)
	}

	if err != nil {
		log.Fatalf("Не удалось подключиться к базе: %v", err)
	}

	if err := goose.Up(db, "migrations"); err != nil {
		log.Fatalf("goose.Up: %v", err)
	}

	r := gin.Default()
	r.Static("/static", "./static")

	r.Use(cors.Default())

	// r.GET("/api/send", getContainersHandler)
	// r.POST("/api/containers", postContainersHandler)

	r.POST("/submit", func(c *gin.Context) {
        handleSubmit(db, c)
    })
    // r.GET("/archive", handleArchiveDownload)

	log.Printf("Backend запущен на порту %s", serverPort)
	if err := r.Run(":" + serverPort); err != nil {
		log.Fatalf("Ошибка запуска сервера: %v", err)
	}
}
func handleSubmit(db *sql.DB, c *gin.Context) {
    // Считываем поля из формы
    fullName := c.PostForm("name")
    email := c.PostForm("email")
    phone := c.PostForm("phone")
    tg := c.PostForm("tg")

    // Сохраняем в БД
    query := `INSERT INTO submissions (full_name, email, phone, tg) VALUES ($1, $2, $3, $4)`
    _, err := db.Exec(query, fullName, email, phone, tg)
    if err != nil {
        log.Printf("Ошибка сохранения в БД: %v\n", err)
        c.String(http.StatusInternalServerError, "Ошибка сохранения данных")
        return
    }

    log.Printf("Данные сохранены: ФИО=%s, Email=%s, Телефон=%s", fullName, email, phone, tg)

    // Возвращаем JSON со ссылкой на скачивание архива
    c.JSON(http.StatusOK, Response{
        ArchiveURL: "/static/NEURO-LINE.apk",
    })
}

// // handleArchiveDownload возвращает zip-архив
// func handleArchiveDownload(c *gin.Context) {
//     // Заставляем браузер скачивать файл
//     c.Writer.Header().Set("Content-Disposition", "attachment; filename=\"example_archive.zip\"")
//     c.File("example_archive.zip")
// }

func getEnv(key, defaultVal string) string {
	val, ok := os.LookupEnv(key)
	if !ok {
		return defaultVal
	}
	return val
}
