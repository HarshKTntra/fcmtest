// importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

// const firebaseConfig = {
//   apiKey: "AIzaSyBV-9ifKkDZZAWGqVHFeNl-dYUtq6tKzDw",
//   authDomain: "fcm-notification-c02fa.firebaseapp.com",
//   projectId: "fcm-notification-c02fa",
//   storageBucket: "fcm-notification-c02fa.appspot.com",
//   messagingSenderId: "1014910309107",
//   appId: "1:1014910309107:web:45649b6e521a75e6069d86",
//   measurementId: "G-E8QFFEDM3Z"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
