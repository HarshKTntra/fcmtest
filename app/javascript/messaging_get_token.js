// import { getMessaging, getToken } from "firebase/messaging";

// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// const messaging = getMessaging();
// // const messaging = getMessaging(app);
// getToken(messaging, { vapidKey: 'BC6I1XAUIvYhsbwiwB1XcylZ9U9XBbaec6tjzKzOw6CNV-xdSr8ZDYf9mvSvuW2WI1S5bhS72HGzXJCGITzfKlk' }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     // ...
//     console.log('Registration token:', currentToken);
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });
