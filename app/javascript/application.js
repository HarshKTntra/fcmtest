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

const firebase_app = initializeApp(firebaseConfig);
const messaging = getMessaging(firebase_app);

requestPermission();

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
       // Get registration token
       console.log("Permission Granted");
       getToken(messaging, { vapidKey: 'BC6I1XAUIvYhsbwiwB1XcylZ9U9XBbaec6tjzKzOw6CNV-xdSr8ZDYf9mvSvuW2WI1S5bhS72HGzXJCGITzfKlk' })
       .then((currentToken) => {
         if (currentToken) {
           // Send the token to your server and update the UI if necessary
            console.log('FCM token:', currentToken);
            // Sending the token to backend
            sendTokenToBackend(currentToken);
         } else {
           console.log('No registration token available.');
         }
       })
       .catch((err) => {
         console.log('An error occurred while retrieving token. ', err);
       });
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  });
}

// messaging.onMessage(function(payload) {
//   console.log('onMessage: ',payload);
// });

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
