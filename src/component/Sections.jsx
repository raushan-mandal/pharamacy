import style from "./Sections.module.css"
import Sec from "./Sec";
const Sections = () => {
  return (
      <div className={style.section2}>
        <div className={style.div}>
          <h5>INGRIDIENTS</h5>
          <h2>Better Ingridients</h2>
          <p className={style.cls}>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
        </div>
        <Sec Vita="Vitamine C" Cont="Vitamin C as ascorbic acid"></Sec>
        <Sec Vita="Vitamine B3" Cont="Niacin for healthy gut and skin"></Sec>
        <Sec Vita="Magnesium" Cont="Boost energy and support muscle function"></Sec>
        <Sec Vita="Hyaluronic Acid" Cont="For smooth, suppl and soft skin!"></Sec>
        <Sec Vita=" Lactobacillus " Cont="Invigorate your gut cmicrobiome"></Sec>
      </div>
  )
}
export default Sections;