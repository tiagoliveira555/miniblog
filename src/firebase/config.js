import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxppBIoUmZBG-oISv22oFhoAqME-_neUQ",
  authDomain: "miniblog-5f098.firebaseapp.com",
  projectId: "miniblog-5f098",
  storageBucket: "miniblog-5f098.appspot.com",
  messagingSenderId: "302726241984",
  appId: "1:302726241984:web:6ff41e0285765cb67b1725"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };