import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header";

class SocialSummary extends React.Component{
    render(){
        var typography = "It hurts to be alive";
        return(
            <Grid>
                <Header typography={typography} name="Summary" history={"/Community-Apps"} ></Header>
            </Grid>
        )
    }
}


export default function(props){
    const navigate = useNavigate();

    return <SocialSummary {...props} navigation={navigate} />
}
