import "@hotwired/turbo-rails";
import "controllers";
import { initializeApp } from 'firebase';
import { getMessaging, getToken } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyBV-9ifKkDZZAWGqVHFeNl-dYUtq6tKzDw",
  authDomain: "fcm-notification-c02fa.firebaseapp.com",
  projectId: "fcm-notification-c02fa",
  storageBucket: "fcm-notification-c02fa.appspot.com",
  messagingSenderId: "1014910309107",
  databaseURL: "https://fcm-notification-c02fa.firebaseio.com",
  appId: "1:1014910309107:web:45649b6e521a75e6069d86",
  measurementId: "G-E8QFFEDM3Z",
};
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful", registration.scope)
    }).catch(function (err) {
      console.log('Failure',err)
      // Display a notification asking the user to change their browser.
      // alert("Please change your browser")
    });
} else {
  console.log("service worker is not supported")
}
const firebase_app = initializeApp(firebaseConfig);
const messaging = getMessaging(firebase_app);


getToken(messaging, { vapidKey: 'BC6I1XAUIvYhsbwiwB1XcylZ9U9XBbaec6tjzKzOw6CNV-xdSr8ZDYf9mvSvuW2WI1S5bhS72HGzXJCGITzfKlk' }).then((currentToken) => {
  if (currentToken) {
  // Send the token to your server and update the UI if necessary
  console.log('FCM token:', currentToken);
  // ...
  sendTokenToBackend(currentToken)
  } else {
  // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
  // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  alert("Failed to retrieve the token. Please try again from the login screen.")
// ...
});

function sendTokenToBackend(token) {
  const csrfToken = document.querySelector("[name='csrf-token']").content;

  fetch(window.location.origin + "/save_fcm_token", {
    method: "POST",
    headers: {
      "X-CSRF-Token": csrfToken,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      registration_token: token
    }),
  });
}
