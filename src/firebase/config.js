import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA56SK_9Nkh9O4lQL2k3TBJFkKpVbp7GFk",
	authDomain: "coderhouse-ecommerce-490bd.firebaseapp.com",
	projectId: "coderhouse-ecommerce-490bd",
	storageBucket: "coderhouse-ecommerce-490bd.appspot.com",
	messagingSenderId: "650314056993",
	appId: "1:650314056993:web:2001c451cfabeb52476a60",
};

// Inizializando Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
