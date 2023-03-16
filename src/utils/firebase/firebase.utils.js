// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Fa1Q2P2-l2GBzrCocR2ktUr_EA4xS5s",
  authDomain: "crwn-clothing-demo-4b705.firebaseapp.com",
  projectId: "crwn-clothing-demo-4b705",
  storageBucket: "crwn-clothing-demo-4b705.appspot.com",
  messagingSenderId: "579216696902",
  appId: "1:579216696902:web:6b3d4b0fb7d66f4ea8cc47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  console.log("//////////////////")
  const docSnap = await getDoc(userDocRef);
  const{displayName,email} = userAuth;
  const createdAt = new  Date();
  //console.log(docSnap.exists());
  
  if(!docSnap.exists()){
    try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  }catch(error) {
      console.log("error",error.message)
    }
  } 
  return userDocRef
}

