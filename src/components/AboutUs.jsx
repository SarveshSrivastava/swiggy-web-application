import { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
    const {loggedInUser}=useContext(UserContext);
  return (
    <div className="w-9/12 mx-auto text-3xl font-bold pt-24">
      <h1>{loggedInUser}</h1><br/>
      <h1>This a fake swiggy application build with live data</h1>
    </div>
  );
};

export default AboutUs;
