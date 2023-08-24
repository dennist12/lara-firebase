importScripts(
    "https://www.gstatic.com/firebasejs/10.3.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-compat.js"
);

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
});

const messaging = app.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
