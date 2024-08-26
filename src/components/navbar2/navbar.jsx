import "./navbar.css";
import logo from "../../assets/logo/logo_light.png";
import { RiListSettingsLine } from "react-icons/ri";


function navbar () {
    return (   
      <nav>
        <div className="logo">
            <img src={logo} alt="KULIAH AI" />
        </div>
        <div className="icon-menu">
        <RiListSettingsLine />    
        </div>
        <div className="menu">
            <ul>
                <li>
                    <a>HOME</a>
                </li>
            </ul> 
            <ul>
                <li>
                    <a>DUKUNG KAMI</a>
                </li>
            </ul> <ul>
                <li>
                    <a>BERI PENILAIAN</a>
                </li>
            </ul> <ul>
                <li>
                    <a>HUBUNGI KAMI</a>
                </li>
            </ul> 
        </div>
      </nav>
    );
}
export default navbar;
