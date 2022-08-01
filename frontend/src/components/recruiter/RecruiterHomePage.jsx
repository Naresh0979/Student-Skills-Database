
import {RecruiterNavbar} from './RecruiterNavbar';
import SmoothScroll from "smooth-scroll";
import { useLocation } from 'react-router-dom';
import SearchByFilter from './SearchByFilter';
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });  

const RecruiterHomePage = () => {
  const location = useLocation(); 
  return (
    <div>
        <RecruiterNavbar fullName={location.state.fullName}/>

        <SearchByFilter  email={location.state.email}/> 
        
    </div>
  );
};

export default RecruiterHomePage;
