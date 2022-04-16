// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNs2vgKOww-9z4prMMEBGh_bqU0AlZJ7Q",
  authDomain: "mobile-team-a.firebaseapp.com",
  databaseURL: "https://mobile-team-a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobile-team-a",
  storageBucket: "mobile-team-a.appspot.com",
  messagingSenderId: "233720108765",
  appId: "1:233720108765:web:c1ff51793c8afe846f2d34",
  measurementId: "G-EZ05HWJHTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
class Users {
    constructor(name,pass,role,user){
        this.name = name;
        this.pass = pass;
        this.role = role;
        this.user = user;
    }
}


export function getPatients(){
    
    let globalPatients = [];
    const colRef = collection(db, 'patients');
    getDocs(colRef)
        .then((snapshot)=> {
            let patients = []
            snapshot.docs.forEach((doc) => {
                patients.push({
                    ...doc.data(), 
                    id: doc.id
                })

            }       
        )
        
        // console.log(patients);
        for(var i = 0; i < patients.length;i++){
            globalPatients[i] = patients[i];
            
        }
    })
    return globalPatients;
}

let globalUsers = [];
export function getUsers(){
    
    const colRefUsers = collection(db, 'users');
    getDocs(colRefUsers)
        .then((snapshot)=>{
            let users = [];
            snapshot.docs.forEach((doc)=>{
                users.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            // console.log(users);
            for(var i = 0; i < users.length;i++){
                globalUsers[i] = users[i];
                // globalUsers.push(users[i]);
                // console.log(globalUsers[0]);        
            }

            console.log(globalUsers);
            return globalUsers;
        })
        


    return globalUsers
}