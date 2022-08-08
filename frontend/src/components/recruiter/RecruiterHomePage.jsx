
import {RecruiterNavbar} from './RecruiterNavbar';
import SmoothScroll from "smooth-scroll";
import { useLocation } from 'react-router-dom';
import SearchByFilter from './SearchByFilter';
import SearchByEmail from './SearchByEmail';
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });  

const RecruiterHomePage = () => {
  const location = useLocation(); 
  return (
    <div>
        <RecruiterNavbar fullName={location.state.fullName}/>

        <SearchByFilter  data={location.state}/> 
        <SearchByEmail data={location.state}/>
        
    </div>
  );
};

export default RecruiterHomePage;
