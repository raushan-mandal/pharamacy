import style from "./Section.module.css"
import Elements from "./Elements"
function Section(){
  return (
    <>
    <div className={style.section}>
      <Elements Img="./Assests/a.item1.png" content="clinically studied" paragraph="All products that we offer have undergone lab and safety tests"></Elements>
      <Elements Img="./Assests/a.item2.png" content="Vegetarian Friendly" paragraph="We have a wide selection of vegetarian products to meet your needs"></Elements>
      <Elements Img="./Assests/a.item3.png" content="Made in India" paragraph="Shop local and explore health products made right here in India"></Elements>
      <Elements Img="./Assests/a.item4.png" content="Free shipping" paragraph="We deliver to your door with no shipping costs on your orders"></Elements>
      <Elements Img="./Assests/a.item5.png" content="No Risk" paragraph="We ensure that all products are safe and within their use-by date"></Elements>
      <Elements Img="./Assests/a.item7.png" content="GMO free" paragraph="Natural, no modified products and derivatives for those who need it"></Elements>
    </div>
    </>
  )
}
export default Section;