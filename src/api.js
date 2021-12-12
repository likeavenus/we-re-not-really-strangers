import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore'; 
import { v4 as uuidv4 } from 'uuid';
import 'regenerator-runtime/runtime.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAQzZH1PEXz-9XwbQz4m-NOF2Nl_vBvGro',
  authDomain: 'cards-game-38089.firebaseapp.com',
  projectId: 'cards-game-38089',
  storageBucket: 'cards-game-38089.appspot.com',
  messagingSenderId: '339955763376',
  appId: '1:339955763376:web:ee7cf7839ff7139340d375',
  measurementId: 'G-SXMS5R0G7Q'
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export const uploadFeedback = async (message) => {
    try {
        const feedbackRef = doc(db, 'feedback', 'messages');
        await updateDoc(feedbackRef, {
            messages: arrayUnion({
                id: uuidv4(),
                message,
            })
        })
        return {
            error: null,
            message: 'Успех!',
            success: true,
        };
    } catch (e) {
        console.error(e);
        return {
            error: e,
            message: 'Что-то пошло не так, попробуй позднее.',
            success: false,
        };
    }
};


export {
    app,
    analytics,
}