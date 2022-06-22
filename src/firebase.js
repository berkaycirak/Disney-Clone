import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlUzjQC6ZFBArUxlitsy59XdiTXQbmxeY',
  authDomain: 'disney-clone-b6427.firebaseapp.com',
  projectId: 'disney-clone-b6427',
  storageBucket: 'disney-clone-b6427.appspot.com',
  messagingSenderId: '880303920953',
  appId: '1:880303920953:web:590d888ed186f3e0fd3ae8',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
