// Helper function to convert a base64 string to a Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
    .replace(/[^A-Za-z0-9+/]/g, '');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

// Rest of your code

async function registerServiceWorker() {
  try {
    // Registering Service Worker
    const serviceWorkerRegistration = await navigator.serviceWorker.register('./firebase-messaging-sw.js', { scope:'./' });
    console.log('[Service Worker] Registered. Scope:', serviceWorkerRegistration.scope);

    await navigator.serviceWorker.ready; // Here's the waiting

    // Registering push
    const subscription = await serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BC6I1XAUIvYhsbwiwB1XcylZ9U9XBbaec6tjzKzOw6CNV-xdSr8ZDYf9mvSvuW2WI1S5bhS72HGzXJCGITzfKlk')
    });
    console.log('[Web Push] Registered');
  } catch (err) {
    console.log('[Service Worker] Registration Error:', err);
    console.log('[Web Push] Registration Error:', err);
  }
}

registerServiceWorker();