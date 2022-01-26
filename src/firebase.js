import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDv9IfpcH9b38TzK_A3i6GXL5Va_ZXnm3w",
    authDomain: "netflix-clone-e6153.firebaseapp.com",
    projectId: "netflix-clone-e6153",
    storageBucket: "netflix-clone-e6153.appspot.com",
    messagingSenderId: "569336799852",
    appId: "1:569336799852:web:13c5b71c96db396c156e49"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;