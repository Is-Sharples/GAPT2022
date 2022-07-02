import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';
import {useNavigate} from "react-router-dom";
import Header from "./header"
import Card from "@mui/material/Card";
import {Box} from "@mui/system";
import { CardContent } from '@mui/material';
import { typography } from "@mui/system";

function Section5(){

    const [dataUri, setDataUri] = useState('');
    const isFullscreen = false;
    const cameraRef = React.useRef();

    const [score, setScore] = useState(0);

    function getScore() {

      var score = parseInt(sessionStorage.getItem("clock1")) + parseInt(sessionStorage.getItem("clock2")) + parseInt(sessionStorage.getItem("clock3"))

        setScore(score);

        var scoretemp = score + parseInt(sessionStorage.getItem("pattern")) + parseInt(sessionStorage.getItem("cube"))
        
        sessionStorage.setItem("visuo",scoretemp.toString());
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

    function onChangeClock1Check() {
      if(document.getElementById('clock1').checked==true)
        sessionStorage.setItem("clock1", "1");
      else
      sessionStorage.setItem("clock1", "0");

      getScore();
      }

      function onChangeClock2Check() {
        if(document.getElementById('clock2').checked==true)
          sessionStorage.setItem("clock2", "1");
        else
        sessionStorage.setItem("clock2", "0");

        getScore();
      }

      function onChangeClock3Check() {
        if(document.getElementById('clock3').checked==true)
          sessionStorage.setItem("clock3", "1");
        else
        sessionStorage.setItem("clock3", "0");

        getScore();
      }

      var typography = "Take a photo of the patient's drawing";


    return(
        <div className="screen">
          <Header typography = {typography} history = {"/sec4"} name = {"Visuospatial/Executive"} />     
          <br/>
          <Card sx={{maxWidth: "70%", borderRadius: "20px", justifyContent:"center", textAlign: "center"}}>
            <CardContent>
              <div>
              <h4>Draw Clock (Ten Past Eleven)</h4>
              <br/>
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

                  </CardContent>    
            </Card>
            <br/>
            <Card sx={{display: "flex", minWidth: "70%", borderRadius: "20px", justifyContent:"center"}}> 
                <CardContent>
                <input className="check" type="checkbox" id="clock1" onChange={onChangeClock1Check}/>
                <label>Contour </label> 
                <br/>
                <input className="check" type="checkbox" id="clock2" onChange={onChangeClock2Check}/>
                <label>Numbers </label> 
                <br/>
                <input className="check" type="checkbox" id="clock3" onChange={onChangeClock3Check}/>
                <label>Hands </label>
                <br/>
                <label>[{score} points]</label>
                </CardContent> 
            </Card>
   
        <button className="next-button" onClick={() => {navigate("/sec6"); sessionStorage.setItem("clock1", "0");sessionStorage.setItem("clock2", "0");sessionStorage.setItem("clock3", "0");}}>Next</button>   
    </div> 
    );
}

export default Section5;