import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBhGUHalnVN36KV1EY-RRlp2lFMZwCxIeM',
  authDomain: 'netflix-clone-84ff6.firebaseapp.com',
  projectId: 'netflix-clone-84ff6',
  storageBucket: 'netflix-clone-84ff6.appspot.com',
  messagingSenderId: '564623883255',
  appId: '1:564623883255:web:a3db630881d4c3b2954cf2',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
