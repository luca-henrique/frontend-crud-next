// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQa7MBtTcEbdC0Rgqe3HHI6wergayGU4M',
  authDomain: 'frontend-crud-next.firebaseapp.com',
  projectId: 'frontend-crud-next',
  storageBucket: 'frontend-crud-next.appspot.com',
  messagingSenderId: '633975165203',
  appId: '1:633975165203:web:814ce6b02fa300b4324ae6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
