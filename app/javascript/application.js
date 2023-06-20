// app/javascript/firebase.js

// Include the Firebase SDK

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js";
// import firebase from "/node_modules/@firebase/app";
// import '../@firebase/messaging';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBV-9ifKkDZZAWGqVHFeNl-dYUtq6tKzDw",
  authDomain: "fcm-notification-c02fa.firebaseapp.com",
  projectId: "fcm-notification-c02fa",
  storageBucket: "fcm-notification-c02fa.appspot.com",
  messagingSenderId: "1014910309107",
  appId: "1:1014910309107:web:45649b6e521a75e6069d86",
  measurementId: "G-E8QFFEDM3Z",
};

const firebase = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Request permission to receive notifications and retrieve device token
function requestNotificationPermissionAndSendToken() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(function () {
      // debugger
      console.log('Notification permission granted.');
      // debugger
      messaging
        .getToken()
        .then(function (token) {
          console.log('Device token:', token);

          // Send the token to your Rails backend
          sendDeviceTokenToBackend(token);
        })
        .catch(function (error) {
          console.error('Error retrieving device token:', error);
        });
    })
    .catch(function (error) {
      console.error('Error requesting notification permission:', error);
    });
}

// Send the device token to your Rails backend
function sendDeviceTokenToBackend(token) {
  // Make an AJAX or fetch request to send the token to the Rails backend
  // Adjust the code based on your backend implementation
  // ...

  console.log('Device token sent to backend:', token);
}

export default requestNotificationPermissionAndSendToken;