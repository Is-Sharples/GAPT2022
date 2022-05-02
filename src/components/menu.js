import React from 'react'
import Header from "./header";
import { Grid, Button, Box } from "@mui/material";

export default function menu() {
    var typography = "Choose the profession to carry out the designated assessment";
  return (
      <div>
        <Header typography = {typography} history = {"/"} name={"Menu"} /> 

        <Grid display='flex' justify={'center'} align='center' container rowGap={5} flexDirection={'column'} style={{width:"100%"}}/*columns={{xs:2, sm: 2, md:2}}*/ >
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', marginTop: '50px', backgroundColor:'#01497A', borderRadius: '20px'}}>Nurse</Button>
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', backgroundColor:'#01497A', borderRadius: '20px'}}>Physiotherapist</Button>
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', backgroundColor:'#01497A', borderRadius: '20px'}}>Occupational Therapist</Button>
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', backgroundColor:'#01497A', borderRadius: '20px'}}>Social Worker</Button>
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', backgroundColor:'#01497A', borderRadius: '20px'}}>Other Profession</Button>
            <Button variant='contained' style ={{maxWidth: '400px', minHeight: '80px', fontSize:'28px', justifyContent:'center', marginLeft: '41.5%', backgroundColor:'#01497A', borderRadius: '20px'}}>Geriatric Consultant</Button>
        </Grid>

    </div>
  )
}
