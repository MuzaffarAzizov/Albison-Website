import Rasm2 from '../assets/qadam.svg'
import './qadam.css'
function Qadam(){
return(
<div className='qadam'>
<img src={Rasm2} alt="" className='img'/>
  <div className="qadam__text">
  <h1>Bir qadam oldinda</h1>
  <p>Bizning barcha ustozlarimiz boy tajribaga ega. Mentorlarimiz tomonidan yaratilgan o'quv dasturlari esa doimiy yangilab boriladi va sizga eng so'ngi hamda faol dasturlash tillari o'rgatiladi.</p>
  </div>
</div>
)
}
export default Qadam;