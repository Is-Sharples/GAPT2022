import logo from './logo.svg';
import './App.css';
import PatientIDSW from './components/Team-1/Social-Worker/PatientID-Social-Worker';
import Patient from './components/Team-4/PatientID';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import currentPatient from './components/Team-4/PatientID';
import Home from './components/Home';
import LevelsOfMobility from './components/Team-2/LevelsOfMobility';
import ListOfEquipment from './components/Team-2/ListOfEquipment';
import Instructions from './components/Team-2/Instructions';
import Timer from './components/Team-2/Timer';
import RiskOfFallStatus from './components/Team-2/RiskOfFallStatus';
import ReviewQuestion from './components/Team-2/ReviewQuestion';
import GripStrength from './components/Team-2/GripStrength';
import GripStrength2 from './components/Team-2/GripStrength2';
import GripStrength3 from './components/Team-2/GripStrength3';
import GripStrength4 from './components/Team-2/GripStrength4';
import SummaryTeam2 from './components/Team-2/SummaryTeam2';
import PatientIDTeam2 from './components/Team-2/PatientID-Team2';
import CreatePatient from './components/CreatePatient';
import SWHomeSupport from './components/Team-1/Social-Worker/Social-History-Home-Support';
import HomeEnvironment from './components/Team-1/Social-Worker/Home-Environment';
import PatientPlans from './components/Team-1/Social-Worker/PatientPlans';
import SocialServices from './components/Team-1/Social-Worker/Social-Services';
import CommunityApps from './components/Team-1/Social-Worker/CommunityApps';
import SocialSummary from './components/Team-1/Social-Worker/Summary-Page';
import RelativePlans from './components/Team-1/Social-Worker/RelativePlans';

//Components
import PatientID from './components/Team-3/PatientID';
import Section1 from './components/Team-3/Section1'
import Section2 from './components/Team-3/Section2'
import Section3 from './components/Team-3/Section3'
import Section4 from './components/Team-3/Section4'
import Section5 from './components/Team-3/Section5'
import Section6 from './components/Team-3/Section6'
import Section7 from './components/Team-3/Section7'
import Section8 from './components/Team-3/Section8'
import Section9 from './components/Team-3/Section9'
import Section10 from './components/Team-3/Section10'
import Section11 from './components/Team-3/Section11'
import Section12 from './components/Team-3/Section12'
import Section13 from './components/Team-3/Section13'
import Section14 from './components/Team-3/Section14'
import Section15 from './components/Team-3/Section15'
import MOCAResults from './components/Team-3/MOCAResults';
import WriteCheck from './components/Team-3/WriteCheck';
import Review from './components/Team-3/Review';

import './styles/style.css';
import './styles/header.css';
//Styling

import './styles/style.css';

export default function App() {

  

  return (
    <Router>
      <Routes>
        <Route path = "/" element={ <Home /> }/>
        {/* Login with: NVD001:pass */}
        <Route path = "/CreatePatient" element={<CreatePatient />}/>
        {/* Team-4 Login with: AMD001:pass */}
        <Route path = "/Patient" element = {<Patient currentPatient = {new currentPatient(0,"","","")}/>} />
        {/* Team-2 Starts here with Login: test:pass */}
        <Route path = "/PatientID-Team-2" element = {<PatientIDTeam2 />}> </Route>
        <Route path="/LevelsOfMobility" element={<LevelsOfMobility/>}></Route>
        <Route path="/ListOfEquipment" element={<ListOfEquipment/>}></Route>
        <Route path="/Instructions" element={<Instructions/>}></Route>
        <Route path="/Timer" element={<Timer/>}></Route>
        <Route path="/RiskOfFallStatus" element={<RiskOfFallStatus/>}></Route>
        <Route path="/ReviewQuestion" element={<ReviewQuestion/>}></Route>
        <Route path="/GripStrength" element={<GripStrength/>}></Route>
        <Route path="/GripStrength2" element={<GripStrength2/>}></Route>
        <Route path="/GripStrength3" element={<GripStrength3/>}></Route>
        <Route path="/GripStrength4" element={<GripStrength4/>}></Route>
        <Route path="/SummaryTeam2" element={<SummaryTeam2/>}></Route>
        {/*Team-2 Ends here   */}
        {/* Team-1 Starts here */}
        <Route path = "/Patient-ID-Social-Worker" element={<PatientIDSW />}></Route>
        <Route path = "/SH-Home-Support" element={<SWHomeSupport />}></Route>
        <Route path = "/SH-Home-Env" element={<HomeEnvironment />} ></Route>
        <Route path = "/SH-Patient-Plans" element={<PatientPlans />} ></Route>
        <Route path = "/SH-Relative-Plans" element={<RelativePlans />} ></Route>
        <Route path = "/Social-Services" element={<SocialServices />} ></Route>
        <Route path = '/Community-Apps' element={<CommunityApps />} ></Route>
        <Route path = "/Summary-Social-Worker" element={<SocialSummary />} />
        {/* Team-1 Ends here */}
        {/* Team -3 Starts Here */}

        <Route path="/questions" element={<Section1 />} ></Route>   
        <Route path="/mobility" element={<Section2 />} ></Route>   
        <Route path="/moca" element={<WriteCheck/>} ></Route>   
        <Route path="/sec3" element={<Section3/>} ></Route>   
        <Route path="/sec4" element={<Section4/>} ></Route>   
        <Route path="/sec5" element={<Section5/>} ></Route>   
        <Route path="/sec6" element={<Section6/>} ></Route>   
        <Route path="/sec7" element={<Section7/>} ></Route>   
        <Route path="/sec8" element={<Section8/>} ></Route>   
        <Route path="/sec9" element={<Section9/>} ></Route>   
        <Route path="/sec10" element={<Section10/>} ></Route>   
        <Route path="/sec11" element={<Section11/>} ></Route>   
        <Route path="/sec12" element={<Section12/>} ></Route>   
        <Route path="/sec13" element={<Section13/>} ></Route>   
        <Route path="/sec14" element={<Section14/>} ></Route>   
        <Route path="/sec15" element={<Section15/>} ></Route>   
        <Route path="/results" element={<MOCAResults/>} ></Route>   
        <Route path="/review" element={<Review/>} ></Route> 
        {/* Team-3 Ended Here */}
      </Routes>
    </Router>


  );
}




