// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1RwLHuSMj-lcEQKGJYWPxoaPxA1L6syw',
  authDomain: 'warmpaws-pet-care-in-win-a8d38.firebaseapp.com',
  projectId: 'warmpaws-pet-care-in-win-a8d38',
  storageBucket: 'warmpaws-pet-care-in-win-a8d38.firebasestorage.app',
  messagingSenderId: '922331715725',
  appId: '1:922331715725:web:8336b0beefec67d830eac4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
