// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, setDoc, addDoc, doc, getDoc } from "firebase/firestore";
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

            // console.log(globalUsers);
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

export function AddNewVisit(id, time){
    const fullpath = 'patients/'+id+'/SectionE';
    const dbref = doc(db,fullpath,time);
    setDoc(dbref,{
        AdmissionBarthel: "",
        AdmissionDate: "",
        AdmissionHeightWeight: "",
        DischargeBarthel: "",
        DischargeDate: "",
        DischargeHeightWeight: "",
    })
}

export function AddDataB(){
    addDoc(collection(db,'patients/1234/SectionB'),{
        DataofSession: "",
        GripStrengthResults:{MaxLeftHandResult: {Risk: "", TestResult: ""}, MaxRightHandResult: {Risk: "", TestResult: ""}, 
        Question1: "", 
        Question2: "", 
        Question3: "",
        Question4: "",
        Question5: "",},
        TUGTestResults:{LevelsOfMobility: {CurrentLevelofMobility: "", PreviousLevelofMobility: ""}, 
        RiskOfFallStatus:{Status: "",TimeTakenInSeconds: ""},
        TUGTestCarriedOut: ""}
        
    })
}

//data1: ablist, data2: dblist, data3: ahw, data4: dhw
export function SetDataB(Adate, Ddate, data1, data2, data3, data4){
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
        AdmitWard:patient.AdmitWard,
        AdmitConsultant:patient.AdmitConsultant,
        AdmitLastYear:patient.AdmitLastYear,
        locality:patient.locality,
        zipcode:patient.zipcode,
        streetname:patient.streetname,
        KinNumber:patient.KinNumber,
        kinName:patient.kinName,
        kinRelation:patient.kinRelation,
        houseName:patient.housename,
        houseNum:patient.houseNum,
    });

    // console.log("Big Success!");
}

export function saveTeam2(patientId,date,data){
    const fullpath= 'patients/'+patientId+'/SectionB';
    const dbref = doc(db,fullpath,date);
    setDoc(dbref,{
        DateofSession: date,
        GripStrengthResults:{MaxLeftHandResult: {Risk: data.lefthandrisk, TestResult: data.lefthandresult}, MaxRightHandResult: {Risk: data.righthandrisk, TestResult: data.righthandresult}, 
        Question1: data.question1, 
        Question2: data.question2, 
        Question3: data.question3,
        Question4: data.question4,
        Question5: data.question5,},
        TUGTestResults:{LevelsOfMobility: {CurrentLevelofMobility: data.currentmobility, PreviousLevelofMobility: data.previousmobility}, 
        RiskOfFallStatus:{Status: data.riskoffallstatus,TimeTakenInSeconds: data.tugtimetaken},
        TUGTestCarriedOut: data.tugcarriedout}
    })
}

export function saveTeam3(patientId,init,date,data){
    const fullpath= 'patients/'+patientId+'/SectionA';
    const dbref = doc(db,fullpath,init+" "+date);
    setDoc(dbref,{
        consultant: init,
        date: date,
        mobilityIndex: data.mobilityIndex,
        moca : {
            abstraction: data.abstraction,
            attention: data.attention,
            finalScore: data.finalScore,
            language: data.language,
            memory: "no points",
            naming: data.naming,
            orientation: data.orientation,
            recall: data.recall,
            visual: data.visual,
        },
        section1: {
            alcohol: data.alcohol,
            diagnosis: data.diagnosis,
            charlsonIndex: data.charlson,
            drugHistory: data.drugHistory,
            education: data.education,
            medicalHistory: data.medicalHistory,
            presentCondition: data.presentCondition,
            smoking: data.smoking,
        }
    })
}

export function saveSocialWorker(patientId,date,Data1,Data2,Data3,Data4,Data5){
    const fullpath = 'patients/'+patientId+'/SectionD';
    const dbref = doc(db,fullpath,date);
    setDoc(dbref, {
        HomeSupport: {
            LivesAlone: Data1.LivesAlone,
            Support: Data1.AnySupport,
        },
        StairstoHome: {
            Stairs: Data2.Stairs, //yes or no
            AmenitiesOnSameFloor: Data2.Amenities, //yes or no
            AmenitiesLocation: Data2.AmenityLoc,
            OtherAmenities: Data2.OtherAmenLoc
        },
        PatientsPlans: Data3.Patient,
        RelativePlans: Data3.Relative,
        SocialServices: Data4,
        CommLTCData: {
            CommLTCApplication: Data5.Apps,
            TimeSpan: Data5.TimeSpan,
        },
        
    })
}

export function saveOccupational(patientId,date,data){
    const fullpath = 'patients/'+patientId+'/SectionC';
    const dbref = doc(db,fullpath,date);
    setDoc(dbref, {
        CurrentADLs: {
            Feeding: data.feedingC,
            Toilet: data.toiletC,
            Bathing: data.bathC,
            Grooming: data.groomC,
            Dressing: data.dressC
        },
        CurrentInstrumentalADL: data.changesinADL,
        Housebound: data.housebound,
        PreviousADLs: {
            Feeding: data.feedingP,
            Toilet: data.toiletP,
            Bathing: data.bathP,
            Grooming: data.groomP,
            Dressing: data.dressP
        },
        PreviousInstrumentalADLs: {
            Telephone: data.telephone,
            Shopping: data.shopping,
            Food: data.food,
            Housekeeping: data.housekeeping,
            Laundry: data.laundry,
            Transportation: data.transportation,
            Medication: data.medication,
            Finances: data.finances,
        }
    })
}

export function saveOther(patientId,date,data){
    const fullpath = 'patients/'+patientId+'/SectionF';
    const dbref = doc(db,fullpath,date);
    setDoc(dbref, {
        DataOfReferral: data.ReferralDate,
        DataSeen: data.DateSeen,
        Notes: data.Notes,
        Profession: data.Profession,
        ReasonForRefferal: data.Reason,
        SeenBy: data.SeenBy
    })
}


export function setUser(users){

    const dbref = doc(db, 'users',users.id);
    setDoc(dbref,{
        name:users.name,
        id:users.id,
        user:users.user,
        pass:users.pass,
        roles: users.roles,
    });

    console.log("Big Success!");
}

export async function GetDocsE(patientId){
    const fullpath = 'patients/'+patientId+'/SectionE';
    const dbref = await collection(db, fullpath);
    const arr= [];
    await getDocs(dbref)
        .then((snapshot) => {
            snapshot.docs.forEach((doc)=>{
                arr.push(
                    doc.id
                );
            })
        })
    return arr
}

let data;
// let test = [];
export async function GetDataE(patientId, docId){
    
    const fullpath = 'patients/'+patientId+'/SectionE';
    const dbref = await collection(db,fullpath);
    await getDoc(dbref)
    .then((snapshot) => {
        data = snapshot.docs.find((doc) => doc.id === docId).data();
        console.log("inside data:",data);
        // test.push(data);
        return data
    })
    // console.log(data);
    //sessionStorage.setItem("",JSON.stringify(data));
    return data;
}

export async function getPatients2(){
    
    let NotGlobal = [];
    const colRef = collection(db, 'patients');
    await getDocs(colRef)
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
            NotGlobal[i] = patients[i];
            
        }
        
    })
    return NotGlobal;
}