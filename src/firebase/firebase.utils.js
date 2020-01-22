import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import SignIn from '../components/sign-in/sign-in.component';

const config=
{
    apiKey: "AIzaSyBcRNBtatwdGuqKo2MqRnEFBeR-8d5zsm4",
    authDomain: "baby-shop-bb5ce.firebaseapp.com",
    databaseURL: "https://baby-shop-bb5ce.firebaseio.com",
    projectId: "baby-shop-bb5ce",
    storageBucket: "baby-shop-bb5ce.appspot.com",
    messagingSenderId: "241006039918",
    appId: "1:241006039918:web:ec28ba7e2bd1560bbce77f",
    measurementId: "G-PLQ04KTHE0"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;