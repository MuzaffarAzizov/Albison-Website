import html from '../assets/html.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import next from '../assets/nextjs.svg'
import git from '../assets/git.svg'
import albison from '../assets/albison.svg'
import epam from '../assets/epam.svg'
import rounded from '../assets/rounded.svg'
import tax from '../assets/tax.svg'
import Itransition from '../assets/Itransition.svg'
import './program.css'
function Program(){
return(<div>
<div className='program'>
  <div className="frontend">
  <h1>Frontend</h1>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={css} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={react} alt="" />
    <p>React</p>
  </div>
  <div className="html">
    <img src={next} alt="" />
    <p>Next</p>
  </div>
  <div className="html">
    <img src={git} alt="" />
    <p>HTML</p>
  </div>
  </div>
  <div className="backend">
  <h1>Backend</h1>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>HTML</p>
  </div>
  </div>
  <div className="internship">
  <h1>Internship</h1>
  <div className="html">
    <img src={albison} alt="" />
    <p>Albison</p>
  </div>
  <div className="html">
    <img src={html} alt="" />
    <p>iTechArt</p>
  </div>
  <div className="html">
    <img src={epam} alt="" />
    <p>EPAM</p>
  </div>
  <div className="html">
    <img src={rounded} alt="" />
    <p>Rounded</p>
  </div>
  <div className="html">
    <img src={tax} alt="" />
    <p>SICNT</p>
  </div>
  <div className="html">
    <img src={Itransition} alt="" />
    <p>Itransition</p>
  </div>
  </div>
</div>
<button className='long__button'>Ro'yhatdan o'tish</button>
</div>
)
}
export default Program;