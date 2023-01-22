import Rus from '../assets/russian.svg'
import Uzbek from '../assets/uzbek.svg'
import English from '../assets/english.svg'
import './footer.css'
function Footer(){
return(
<div className='footer'>
  <div className="number">
  <h3>Contact</h3>
  <h6>Do you have any question?</h6>
  <h5>(88) 123 80 80</h5>
  <h5>(90) 112 27 57</h5>
  </div>
  <div className="number">
  <h3>Address</h3>
  <div className="h5">
  <h5>Tashkent</h5>
  <h5>Labzak street 70</h5>
  <h5>Amity University</h5>
  </div>
  </div>
  <div className="number">
  <h3>Language</h3>
  <div className="language">
  <img src={Rus} alt="" />
  <img src={Uzbek} alt="" />
  <img src={English} alt="" />
  </div>
  </div>
</div>
)
}
export default Footer;