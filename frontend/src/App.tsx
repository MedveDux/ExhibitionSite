// import { useState } from "react";
// import "./index.css"; // Файл, где объявлены @tailwind base/components/utilities
// import Logo1 from "./assets/miobreez.svg";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Проверка, что телефон соответствует формату +7XXXXXXXXXX (всего 11 цифр)
//   const validatePhone = (value: any) => {
//     const pattern = /^\+7\d{10}$/;
//     return pattern.test(value);
//   };

//   // Отправка формы
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setPhoneError(""); // Сбрасываем предыдущую ошибку
//     setIsSubmitted(false); // Сбрасываем флаг успешной отправки

//     if (!validatePhone(phone)) {
//       setPhoneError(
//         "Номер телефона должен быть в формате +7XXXXXXXXXX (11 цифр)."
//       );
//       return;
//     }
//     // Здесь может быть реальный запрос на сервер через fetch/axios, например:
//     // fetch("http://example.com/submit", { method: "POST", body: JSON.stringify({ name, email, phone }) })
//     //   .then(...)
//     //   .catch(...)

//     // Если всё ок, показываем сообщение об успехе
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Шапка со стилизованным блоком (hero) */}
//       <header
//         className="relative h-72 flex items-center justify-center text-white text-center"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1581091012184-de46741f4cf4")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Тёмная подложка поверх изображения */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative z-10 px-4">
//           <h2 className="text-sm md:text-base font-light">
//             Москва, Сколково, ул. Большой бульвар, д. 42 стр. 1, зал В03-04
//           </h2>
//           <h1 className="text-2xl md:text-3xl font-bold mt-2">
//             День открытых дверей
//             <br />в инжиниринговом центре металлообработки
//           </h1>
//           <h1 className="text-xl md:text-2xl font-semibold mt-2">
//             DM Technologies | SEMAT в Сколково
//           </h1>
//         </div>
//       </header>

//       {/* Основной блок с формой */}
//       <main className="flex-grow flex items-center justify-center p-6">
//         <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-xl">
//           <h2 className="text-2xl font-bold mb-4 text-center">Регистрация</h2>

//           {/* Сообщение об успешной отправке */}
//           {isSubmitted && (
//             <div className="mb-4 text-green-600 font-semibold text-center">
//               Данные успешно отправлены!
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* ФИО */}
//             <div>
//               <label className="block mb-1 text-gray-700 font-medium">
//                 ФИО
//               </label>
//               <input
//                 type="text"
//                 placeholder="Иванов Иван Иванович"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none
//                            focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//               />
//             </div>

//             {/* E-mail */}
//             <div>
//               <label className="block mb-1 text-gray-700 font-medium">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 placeholder="example@mail.ru"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none
//                            focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//               />
//             </div>

//             {/* Телефон */}
//             <div>
//               <label className="block mb-1 text-gray-700 font-medium">
//                 Телефон (Россия)
//               </label>
//               <input
//                 type="tel"
//                 placeholder="+79990000000"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className={`w-full border rounded px-3 py-2 focus:outline-none
//                   focus:ring-2 focus:ring-blue-400 focus:border-transparent
//                   ${phoneError ? "border-red-500" : "border-gray-300"}`}
//               />
//               {phoneError && (
//                 <p className="mt-1 text-red-500 text-sm">{phoneError}</p>
//               )}
//               <p className="text-sm text-gray-500 mt-1">
//                 Формат: +7 и 10 цифр (например, +79991234567)
//               </p>
//             </div>

//             {/* Кнопка отправки */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-semibold rounded py-2 
//                          hover:bg-blue-700 transition-transform transform hover:-translate-y-0.5"
//             >
//               Отправить
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Подвал */}
//       <footer className="bg-gray-200 py-6">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-4">
//             <h3 className="text-lg font-semibold mb-2">Наши контакты</h3>
//             <p>
//               Телефон:{" "}
//               <a href="tel:+89777123877" className="underline">
//                 8 977 712 38 77
//               </a>
//             </p>
//             <p>
//               E-mail:{" "}
//               <a href="mailto:info@example.ru" className="underline">
//                 info@example.ru
//               </a>
//             </p>
//             <p className="mt-1">
//               Telegram:{" "}
//               <a
//                 href="https://t.me/YourTelegramChannel"
//                 className="underline"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 t.me/YourTelegramChannel
//               </a>
//             </p>
//           </div>

//           {/* Блок спонсоров (баннеры) */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <div className="bg-white p-4 shadow-md rounded w-48 flex items-center justify-center">
//               <span className="font-semibold">
//                <img src={Logo1} alt="Logo" className="w-16 h-16" />;
//               </span>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded w-48 flex items-center justify-center">
//               <span className="font-semibold">Логотип 2</span>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded w-48 flex items-center justify-center">
//               <span className="font-semibold">Логотип 3</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./index.css";
import myPhoto from "./assets/gotovo.png";
import Logo1 from "./assets/miobreez.svg";
import Logo2 from "./assets/olivia.svg";
import Logo3 from "./assets/sk.svg";

function App() {
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!fio.trim()) {
      setError("Пожалуйста, заполните поле «ФИО».");
      return;
    }
    if (!email.trim()) {
      setError("Пожалуйста, заполните поле «E-mail».");
      return;
    }
    if (!phone.trim() && !telegram.trim()) {
      setError("Заполните хотя бы одно из полей «Телефон» или «Telegram».");
      return;
    }

    // Запрос к бэкенду при необходимости
    setSubmitted(true);
    try {
      const bacUrl = 'http://localhost:8080'
      // Делаем запрос на Go-сервер
      const response = await fetch(bacUrl + "/submit", {//123
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: fio,
          email: email,
          phone: phone,
          tg: telegram,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке на бэкенд");
      }

      // Ответ предполагается JSON { "archiveUrl": "/archive" } (или что-то своё)
      const data = await response.json();
      console.log("Ответ сервера:", data);

      // Можно сразу переадресовать на /archive, если нужно
      window.location.href = bacUrl + data.archiveUrl; 
      
    } catch (err) {
      console.error(err);
      setError("Ошибка при отправке формы. Попробуйте ещё раз.");
    }
  // };<div className=""></div>
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      
      {/* Шапка (header) */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-purple-900 to-black h-[40vh] min-h-[300px] w-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base font-light">
            При поддержке российских научных команд
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold">
            Чувственный контакт с&nbsp;Вашим смартфоном!
          </h1>
          <p className="mt-2 text-xl md:text-2xl max-w-lg mx-auto">
            Нейроперчатка для прикосновения к&nbsp;текстурам на&nbsp;экране смартфона
          </p>
        </div>
      </header>

      {/* Основной контент: картинка + форма (без волны) */}
      <main className="-mt-10 mb-10 px-4 flex-grow flex flex-col items-center space-y-8">
        {/* Картинка над формой */}
        <img
          src={myPhoto}
          alt="Картинка"
          className="max-w-md w-full h-auto"
        />

        {/* Контейнер с формой (без wave-container) */}
        <div className="bg-gray-800 w-full max-w-lg p-6 md:p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Получить демо версию Neuro Line
          </h2>

          {submitted && (
            <div className="mb-4 text-green-400 font-semibold text-center">
              Данные успешно отправлены!
            </div>
          )}
          {error && (
            <div className="mb-4 text-red-500 font-medium text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">ФИО*</label>
              <input
                type="text"
                value={fio}
                onChange={(e) => setFio(e.target.value)}
                placeholder="Иванов Иван Иванович"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           focus:border-transparent"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">E-mail*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           focus:border-transparent"
              />
            </div>

            <p className="text-sm text-gray-400 pt-2">
              Заполните обязательно одно из следующих полей:
            </p>
            <div>
              <label className="block mb-1 font-medium">Телефон</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7XXXXXXXXXX"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           focus:border-transparent"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Telegram</label>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="@nickname"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-purple-500
                           focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold rounded-lg py-3 mt-4
                         hover:bg-purple-700 transition transform hover:-translate-y-0.5
                         shadow-md"
            >
              Получить демо версию Neuro Line
            </button>
          </form>
        </div>
      </main>

      {/* Подвал (footer) */}
      <footer className="bg-gray-900 pb-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-6">Контакты</h3>

          {/* Первая строка (телефон + почта) */}
          <div className="flex flex-row items-center justify-center gap-8 flex-wrap mb-6">
            {/* Телефон */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.072 15.072 0 006.59 6.59l2.2-2.2c.27-.27.67-.36
                1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1.01.45 1.01
                1.01V20c0 .56-.45 1.01-1.01
                1.01C12.07 21.01 3 11.94 3
                1.01 3 .45 3.45 0 4.01 0h3.99c.56 0
                1.01.45 1.01 1.01 0 1.24.2
                2.45.57 3.57.11.35.03.74-.25
                1.02l-2.2 2.19z" />
              </svg>
              <a
                href="tel:+79999990107"
                className="underline hover:text-purple-300"
              >
                +7 999 999 01 07
              </a>
            </div>

            {/* Почта */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2
                  2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
                  2-2V6c0-1.1-.9-2-2-2zm0 4l-8
                  5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a
                href="mailto:mail@miobreez.ru"
                className="underline hover:text-purple-300"
              >
                mail@miobreez.ru
              </a>
            </div>
          </div>

          {/* Вторая строка (два Телеграма) */}
          <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-purple-400"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0
                  256s111 248 248 248 248-111
                  248-248S385 8 248
                  8zm114.7 141.8l-36 169.3c-2.8
                  12.4-10.2 15.5-20.6 9.7l-57-42.2-27.5
                  26.4c-3 3-5.5 5.5-11.3
                  5.5l4-56.8 103.5-93.5c4.5-4.2-1-6.5-7-2.3L188
                  270.9l-54.7-17c-11.9-3.7-12.1-11.9
                  2.5-17.6l211.1-81.6c9.8-3.7
                  18.3 2.4 15.8 14.1z"
                />
              </svg>
              <a
                href="https://t.me/miobreez"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-purple-300"
              >
                t.me/miobreez
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-purple-400"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0
                  256s111 248 248 248 248-111
                  248-248S385 8 248
                  8zm114.7 141.8l-36 169.3c-2.8
                  12.4-10.2 15.5-20.6 9.7l-57-42.2-27.5
                  26.4c-3 3-5.5 5.5-11.3
                  5.5l4-56.8 103.5-93.5c4.5-4.2-1-6.5-7-2.3L188
                  270.9l-54.7-17c-11.9-3.7-12.1-11.9
                  2.5-17.6l211.1-81.6c9.8-3.7
                  18.3 2.4 15.8 14.1z"
                />
              </svg>
              <a
                href="https://t.me/oleviia_kiber"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-purple-300"
              >
                t.me/oleviia_kiber
              </a>
            </div>
          </div>

          {/* Баннеры / лого */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            <div className="bg-gray-800 p-4 shadow-md rounded-lg w-50 h-20 flex items-center justify-center
                            transform hover:scale-105 transition">
                <a href="https://miobreez.ru/test" target="_blank" rel="noreferrer" className="text-gray-100 font-semibold text-center">
                <img src={Logo1} alt="Logo" className="w-[14rem] h-16" />
                </a>
            </div>
            <div className="bg-gray-800 p-4 shadow-md rounded-lg w-50 h-20 flex items-center justify-center
                            transform hover:scale-105 transition">
                <a href="https://cybersuits.me/" target="_blank" rel="noreferrer" className="text-gray-100 font-semibold text-center">
                <img src={Logo2} alt="Logo" className="w-[14rem] h-16" />
                </a>
            </div>
            <div className="bg-gray-800 p-4 shadow-md rounded-lg w-40 h-20 flex items-center justify-center
                            transform hover:scale-105 transition">
                <a href="https://www.sk.ru/" target="_blank" rel="noreferrer" className="text-gray-100 font-semibold text-center">
                <img src={Logo3} alt="Logo" className="w-[14rem] h-16" />
                </a>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            © 2025 Neuro Line — Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
