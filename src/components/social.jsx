import Albison from '../assets/logo.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Gmail from '../assets/gmail.svg'
import Youtube from '../assets/Youtube.svg'
import Telegram from '../assets/Telegram.svg'
import './social.css'
function Social(){
return(<div className='social'>
<div className='logo'>
    <img src={Albison} alt="" />
    </div>
<div className="link">
  <a href="#">
      <img src={Instagram} alt="" />
    </a>
  <a href="#">
      <img src={Gmail} alt="" />
    </a>
  <a href="#">
      <img src={Facebook} alt="" />
    </a>
  <a href="#">
      <img src={Youtube} alt="" />
    </a>
  <a href="#">
      <img src={Telegram} alt="" />
    </a>
</div>
</div>
)
}
export default Social;