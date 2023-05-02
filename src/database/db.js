import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


 initializeApp(firebaseConfig);
const db = getDatabase();

export default db;

// проверка подключения farbase
const checkConnection = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const database = getDatabase(db);
    console.log('Connection to Firebase database successful');
  } catch (error) {
    console.error('Error connecting to Firebase database', error);
  }
};

checkConnection();
