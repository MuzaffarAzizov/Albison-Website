import Image1 from '../assets/showcase.svg'
import './showcase.css'
function Showcase(){
return(
<div className='showcase'>
  <div className="showcase__text">
  <h1>NEGA YANA <br /> GRAND KURSLAR</h1>
  <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
  <div className="showcase__button">
  <button className='royxat'><a href="#">Ro'yxatdan o'tish</a></button>
  <button className='kurs'><a href="#">Barcha kurslar</a></button>
  </div>
  </div>
  <img src={Image1} alt="" className='img'/>
</div>
)
}
export default Showcase;