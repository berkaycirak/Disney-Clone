import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, collection, writeBatch } from 'firebase/firestore';

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

// In order to add data into firebase.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.movies.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};
