import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcRtk-z3dUZI1sQ5QoGSvl8g7haPABXNI",
  authDomain: "rene-app-react-ea429.firebaseapp.com",
  projectId: "rene-app-react-ea429",
  storageBucket: "rene-app-react-ea429.appspot.com",
  messagingSenderId: "253808395212",
  appId: "1:253808395212:web:cda2410db236ac49fa1369"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)