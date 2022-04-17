// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, setDoc, addDoc, doc } from "firebase/firestore";
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


export function ShowSectionE(){
    let allData = "";
    const colRefE = collection(db, 'patients/1234/SectionE');
    getDocs(colRefE)
        .then((snapshot) => {
            let Joe = "";
            Joe = snapshot.docs.find((doc) => doc.id === 'i9u0dmhAUnXroxWxg9H2').data();
            console.log(Joe);
            allData = Joe;
        })
        
    return allData
}

export function AddData(){
    addDoc(collection(db,'patients/1234/SectionE'),{
        ahw: "some",
        dhw: "random",
        ab: "generic",
        db: "data"
    })
}

//data1: ablist, data2: dblist, data3: ahw, data4: dhw
export function SetData(Adate, Ddate, data1, data2, data3, data4){
    const dbref = doc(db,'patients/1234/SectionE','NNS66Bptd9kFWijqoFeW');
    setDoc(dbref,{
        ab: data1,
        AdmissionDate: Adate,
        ahw: data3,
        db: data2,
        DischargeDate: Ddate,
        dhw: data4
    })
}

export function setPatient(patient){

    const dbref = doc(db, 'patients',patient.id);
    setDoc(dbref,{
        name:patient.name,
        id:patient.id,
        gender:patient.gender,
        age:patient.age,
    });


    // console.log("Big Success!");
}
