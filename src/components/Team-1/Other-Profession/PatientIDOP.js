import React from "react";
import Header from "../../header";
import { Grid, TextField } from "@mui/material";
import { List, Divider, ListItem,ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPatients } from "../../firebase";



class currentPatient{
    constructor(id,name,surname,gender){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.surname = surname;
    }
    
}


class PatientIDOP extends React.Component{

constructor(props){
    super(props);
    this.state = {
        exist: "false",
        patients : getPatients(),
        fragments:[],
        currentPatient: new currentPatient(0,"","",""),
        entered: "true",
        patientID:"",
};

    
}   
//let [patientId, setPatientId] = useState("");

componentWillUnmount() {
    this.setState({
      text: "",
      fragments:<></>,
      currentPatient: new currentPatient(0,"","",""),
      
    });
    
    this.state.currentPatient.id = 0;
  }

componentDidMount(){
    this.state.currentPatient.id = 0;
}


SetCurrentPatient(patient){
    
    this.setState({currentPatient:patient,});
    sessionStorage.setItem("PatientData",this.state.currentPatient.id);
    this.setState({entered: "false"});
}




DisplayPatients = (event) =>{  
    var value = event.target.value.toUpperCase();
    var testing = [];  

    if(value !== ""){
        
        //console.log(getPatients());    
        this.state.patients.map((patient, index) => {
            var tempID = patient.id.toUpperCase().substr(0,value.length);
            let regex = new RegExp(tempID,'g');
            
            if(regex.test(value)){
                testing.push(
                    <React.Fragment  key = {index}>
                        
                        <ListItemButton  onClick={() => this.SetCurrentPatient(patient)} >
                            <ListItemText primary={patient.name} secondary={patient.id} />    
                        </ListItemButton>
                        <Divider />
            
                    </React.Fragment>
            
                )
            }
            
    
        })

        this.setState({fragments:testing});

    }else{
        this.setState({fragments:<></>});
    }
    
}

render(){
    
    // const [error, setError] = useState("");
    sessionStorage.setItem("PatientData" , this.state.currentPatient.id);
    var typography = "Input a Patient ID";
    //const json = JSON.stringify(patients);
    //const obj = JSON.parse(json);    
    
    const { navigation } = this.props;
    if(this.state.currentPatient.id !== 0){
        
        navigation("/Section1OP");
    }
    

    
    return (
            
        <div className="screen" > 
        <Grid justifyContent={"center"} rowGap={4} container  columns={{ xs: 2, sm: 2, md: 6 }}>
            
            <Header typography = {typography} history = {"/"} item  name = {"Patient Page"}/>
                
                <Grid justifyContent={"center"} container item >
                    <div className="search-container" >
                        <TextField  label={"Patient ID"} 
                                    onChange ={this.DisplayPatients}
                        ></TextField>
                        <List >                 
                            <Divider />                           
                            {this.state.fragments}                          
                        </List>


                </div>
                

                </Grid>
            <Grid container item >

            </Grid>
            
        
        </Grid>

        </div> 
    
    

    );


    }


    
}

// export default PatientID;

export default function (props){
    const navigate= useNavigate();


    return <PatientIDOP {...props} navigation={navigate} ></PatientIDOP>
}
