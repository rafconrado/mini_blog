import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhXVNKhgNhZX6iMZVhJnu8_Q8Qzedhoy8",
  authDomain: "miniblog-5d65e.firebaseapp.com",
  projectId: "miniblog-5d65e",
  storageBucket: "miniblog-5d65e.appspot.com",
  messagingSenderId: "593391902146",
  appId: "1:593391902146:web:ede28b8be3cd5f4e2f4a5b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
