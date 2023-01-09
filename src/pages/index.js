import * as React from "react";
// import Clinic from "../components/Clinic/clinic";
import { Clinic, Customers, Footer, Heading, Navbar, Services, Specialists, Email } from "../components/com";


const IndexPage = () => ( 
<div className="hospital">
<div><Navbar/> </div>
<div><Heading/> </div>
<div><Services/> </div>
<div><Clinic/> </div>
<div><Specialists/> </div>
<div><Customers/> </div>
<div><Email/> </div>
<div> <Footer/> </div>

</div>
);
  
export default IndexPage
