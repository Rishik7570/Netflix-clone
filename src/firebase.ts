import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDLAll4whboP4elWO2_ecdwB7wpdxlai9o",
  authDomain: "netflix-clone-9578b.firebaseapp.com",
  projectId: "netflix-clone-9578b",
  storageBucket: "netflix-clone-9578b.appspot.com",
  messagingSenderId: "956785290621",
  appId: "1:956785290621:web:ae8aa795d3a7ea23dcf014"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async(name:string,email:string,password:string)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error('An error has occured')
    }
}

const login = async(email:string,password:string)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
        toast.success('Successfully logged in')
    } catch (error) {
        console.log(error);
        toast.error('Wrong credentials')
    }
}

const signout = ()=>{
    signOut(auth)
    toast.success('Logged out')

}

export {auth, db, signup, login, signout}