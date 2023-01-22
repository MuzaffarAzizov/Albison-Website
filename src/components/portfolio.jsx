import Rasm3 from '../assets/portfolio.svg'
import './portfolio.css'
function Portfolio(){
return(
<div className='portfolio'>
  <div className="portfolio__text">
  <h1>Kuchli portfolio
</h1>
  <p>O'quv jarayonlarida har bir talaba o'z bilim darajasiga mos loyihalarda qatnashishi yoki o'z loyihalarini amalga oshirishi mumkin.
</p>
  </div>
<img src={Rasm3} alt="" className='img'/>
</div>
)
}
export default Portfolio;