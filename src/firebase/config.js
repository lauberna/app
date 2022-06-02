
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVfi2ea2V9o2jLVRIiBVi-o4jMogDN7Vw",
  authDomain: "e-commerce-4f907.firebaseapp.com",
  projectId: "e-commerce-4f907",
  storageBucket: "e-commerce-4f907.appspot.com",
  messagingSenderId: "346871435192",
  appId: "1:346871435192:web:64866f787c28e5d008094d"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}