import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD9hoDyYk9axMZACh4LgIBZLjowbWaaS8U',
  authDomain: 'facebook-84343.firebaseapp.com',
  projectId: 'facebook-84343',
  storageBucket: 'facebook-84343.appspot.com',
  messagingSenderId: '843087597590',
  appId: '1:843087597590:web:fc7fc2f9af4d7c1814a537',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
