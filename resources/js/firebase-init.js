import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebase = initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
});

var messaging = getMessaging(firebase);

const init = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            //TODO []
            initToken();
        } else {
            Notification.requestPermission();
            axios.post(route("update_fcm_token"), {
                fcm_token: null,
            });
            console.log("Unable to get permission to notify.");
        }
    });
};

const initToken = () => {
    getToken(messaging, {
        vapidKey:
            "BPPUaDdlTDL8B30tOZ9IZAOpFQFPlBCVUWrt22DPh-1v-aIiCPWKqi0D2ul9J3jQwmEFuESH0KlBbldlHsTcKJg",
    })
        .then((e) => {
            if (e) {
                axios.post(route("update_fcm_token"), {
                    fcm_token: e,
                });
            }
        })
        .catch((e) => {
            console.log(e);
        });
};

onMessage(messaging, (e) => {
    new Notification(e.notification?.title, {
        body: e.notification?.body,
    });
});

init();
