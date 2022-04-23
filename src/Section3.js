import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';
import {useNavigate} from "react-router-dom";
import Header from "./Components/Header"
import Card from "@mui/material/Card";
import {Box} from "@mui/system";
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";


function Section3(){
    const [dataUri, setDataUri] = useState('');
    const isFullscreen = false;
    const cameraRef = React.useRef();

    const [score, setScore] = useState(0);

    function getScore() {
  
        var scoretemp = score + 
        + parseInt(sessionStorage.getItem("clock1")) + parseInt(sessionStorage.getItem("clock2")) + parseInt(sessionStorage.getItem("clock3")) + parseInt(sessionStorage.getItem("cube"))
          
          sessionStorage.setItem("visuo",scoretemp.toString());

        var score = parseInt(sessionStorage.getItem("pattern"));
  
        setScore(score);
        };

        function handleTakePhoto (dataUri) {
            // Handling photos
            console.log('takePhoto');
          }
        
          function handleCameraError (error) {
            console.log('handleCameraError', error);
          }
        
          function handleCameraStart (stream) {
            console.log('handleCameraStart');
          }
        
          function handleCameraStop () {
            console.log('handleCameraStop');
          }
    
          function handleTakePhotoAnimationDone (dataUri) {
            console.log('takePhoto');
            setDataUri(dataUri);
            sessionStorage.setItem("patternpic",dataUri);
          }
    
          function clearPhoto() {
              setDataUri('');
              sessionStorage.setItem("patternpic","");
          }

    const navigate = useNavigate();

    function onChangePatternCheck() {
        if(document.getElementById('pattern').checked==true){
          sessionStorage.setItem("pattern", "1");
        }else
        sessionStorage.setItem("pattern", "0");

        getScore();
      }  

    var typography = "Take a photo of the patient's drawing";

    return(
        <div className="screen">
           <Header typography = {typography} history = {"/moca"} name = {"Visuospatial/Executive"} />   
          <br/>
            <Card sx={{minWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                    <img src="pattern.png"></img>
                </CardContent>
            </Card>
            <br/>
            <Card sx={{maxWidth: "80%", borderRadius: "20px"}}>  
            <br/>      
            <div>
                        {(dataUri)
                            ? <ImagePreview dataUri={dataUri}
                                            isFullscreen={isFullscreen}
                            /> :
                            <Camera ref={cameraRef}
                                    onTakePhoto={(dataUri) => {
                                        handleTakePhoto(dataUri);
                                    }}
                                    onTakePhotoAnimationDone={(dataUri) => {
                                        handleTakePhotoAnimationDone(dataUri);
                                    }}
                                    onCameraError={(error) => {
                                        handleCameraError(error);
                                    }}
                                    onCameraStart={(stream) => {
                                        handleCameraStart(stream);
                                    }}
                                    onCameraStop={() => {
                                        handleCameraStop();
                                    }}
                            />
                        }
                    </div>
                    <br/>
                    <Box textAlign="center">
                        <button className="next-button" onClick={clearPhoto}>Clear Photo</button>
                    </Box>
            </Card>
            <br/>
            <Card sx={{minWidth: "80%", borderRadius: "20px", textAlign:"center"}}> 
                <CardContent>
                <input type="checkbox" id="pattern" onChange={onChangePatternCheck}/>
                <label>Correct? </label> 
                <label>[{score} points]</label>
                </CardContent> 
            </Card>
   
        <button className="next-button" onClick={() => {navigate("/sec4");}}>Next</button>   
    </div> 
    );
}

export default Section3;