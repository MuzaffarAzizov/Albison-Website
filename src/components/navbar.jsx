import Albison from '../assets/logo.svg'
import './navbar.css'
function Navbar(){
return(
<div className='navbar'>
  <a href="#">
    <img src={Albison} alt="" />
  </a>
  <ul>
    <li><a href="#">Asosiy</a></li>
    <li><a href="#">Ustunliklar</a></li>
    <li><a href="#">Career</a></li>
    <button className='contact'><a href="#">Contact</a></button>
  </ul>
</div>)
}
export default Navbar;