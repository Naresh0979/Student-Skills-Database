import { useLocation } from "react-router-dom";
import Leaderboard from "../common/Leaderboard";
import SearchByEmail from "../recruiter/SearchByEmail";
import { Navbar } from "../../Navbar";
const ProfileLeader = () => {
    const location = useLocation();
    return ( 
        <div>
            <Navbar/>
            <Leaderboard data={location.state}/>
            <SearchByEmail data={location.state}/>
        </div>
     );
}
 
export default ProfileLeader;