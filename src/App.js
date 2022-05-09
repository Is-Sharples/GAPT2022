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
import CreatePatient from './components/admin/CreatePatient';
import SWHomeSupport from './components/Team-1/Social-Worker/Social-History-Home-Support';
import HomeEnvironment from './components/Team-1/Social-Worker/Home-Environment';
import PatientPlans from './components/Team-1/Social-Worker/PatientPlans';
import SocialServices from './components/Team-1/Social-Worker/Social-Services';
import CommunityApps from './components/Team-1/Social-Worker/CommunityApps';
import SocialSummary from './components/Team-1/Social-Worker/Summary-Page';
import RelativePlans from './components/Team-1/Social-Worker/RelativePlans';
import PatientIDOT from './components/Team-1/Occupational-Therapist/PatientID';
import Section1OT from './components/Team-1/Occupational-Therapist/Section1';
import Section2OT from './components/Team-1/Occupational-Therapist/Section2';
import Section3OT from './components/Team-1/Occupational-Therapist/Section3';
import Section4OT from './components/Team-1/Occupational-Therapist/Section4';
import Section5OT from './components/Team-1/Occupational-Therapist/Section5';
import Section6OT from './components/Team-1/Occupational-Therapist/Section6';
import PatientIDOP from './components/Team-1/Other-Profession/PatientIDOP';
import Section1OP from './components/Team-1/Other-Profession/Section1OP';
import Section2OP from './components/Team-1/Other-Profession/Section2OP';
import Section3OP from './components/Team-1/Other-Profession/Section3OP';
import Section4OP from './components/Team-1/Other-Profession/Section4OP';
import Section5OP from './components/Team-1/Other-Profession/Section5OP';
import Menu from './components/menu';
import PatientViewID from './components/PatientView/PatientView-ID';
import PatientViewDetails from './components/PatientView/PatientView-Details';
import PatientViewMenu from './components/PatientView/PatientView-Menu';
import PatientViewSummary from './components/PatientView/Summary';
import PatientViewOccupation from './components/PatientView/PatientView-Occupation';
import PatientViewSocialWorker from './components/PatientView/PatientView-SocialWorker';
import PatientViewGC from './components/PatientView/PatientView-GC';
import PatientViewPhysio from './components/PatientView/PatientView-Physio';
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
import CreateUsers from './components/admin/CreateUsers';
import AdminMenu from './components/admin/menu';
import PatientViewOP from './components/PatientView/PatientView-OP';
//Styling



export default function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element={ <Home /> }/>
        {/* Login with: NVD001:pass */}
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
        <Route path='/Team-3-PatientID' element={<PatientID />} ></Route>
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
        {/* Occupational Therapist */}
        <Route path="/menu" element={<Menu/>} ></Route> 
        <Route path="/PatientIDOT" element={<PatientIDOT/>} ></Route>
        <Route path="/Section1OT" element={<Section1OT/>} ></Route>
        <Route path="/Section2OT" element={<Section2OT/>} ></Route>
        <Route path="/Section3OT" element={<Section3OT/>} ></Route>
        <Route path="/Section4OT" element={<Section4OT/>} ></Route>
        <Route path="/Section5OT" element={<Section5OT/>} ></Route>
        <Route path="/Section6OT" element={<Section6OT/>} ></Route>
        {/* Other Profession */}
        <Route path="/PatientIDOP" element={<PatientIDOP/>} ></Route>
        <Route path="/Section1OP" element={<Section1OP/>} ></Route>
        <Route path="/Section2OP" element={<Section2OP/>} ></Route>
        <Route path="/Section3OP" element={<Section3OP/>} ></Route>
        <Route path="/Section4OP" element={<Section4OP/>} ></Route>
        <Route path="/Section5OP" element={<Section5OP/>} ></Route>


        {/* Admin */}
        <Route path = "/AdminMenu" element={<AdminMenu />} ></Route>
        <Route path = "/CreatePatient" element={<CreatePatient />}/>
        <Route path = "/CreateUser"    element={<CreateUsers />}></Route>

        {/* PatientView */}

        <Route path = "/PatientView" element={<PatientViewID />} ></Route>
        <Route path='/PatientView-Details' element={<PatientViewDetails />} ></Route>
        <Route path = '/Patient-Menu' element={<PatientViewMenu />} ></Route>
        <Route path = '/PatientView-Nurse' element={<PatientViewSummary />} ></Route>
        <Route path = '/PatientView-Other' element={<PatientViewOP />} ></Route>
        <Route path = '/PatientView-Occupational' element={<PatientViewOccupation />} ></Route>
        <Route path = '/PatientView-Social' element={<PatientViewSocialWorker />} ></Route>
        <Route path = '/PatientView-GC' element={<PatientViewGC />}></Route>
        <Route path = '/PatientView-Physio' element={<PatientViewPhysio />} ></Route>
      </Routes> 
    </Router>


  );
}




