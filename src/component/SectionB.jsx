
import Covid from "./Covid";
import style from "./SectionB.module.css"
function SectionB(){
  return (
    <>
    <div className={style.sec3}>
      <div className={style.sec4}>
        <div className={style.secA}>
        <Covid image="./Assests/blog1.png" height="320px" width="300px"></Covid>
        </div>
        {/* <div className={}></div> */}
        <Covid image="./Assests/Tab.png" height="160px" width="300px"></Covid>
        </div>
      <div className={style.sec5}>
      {/* <Covid image="./Assests/blog1.png" height="160px" width="300px"></Covid> */}
      <div className={style.img1}><Covid image="./Assests/blog1.png" height="320px" width="295px"></Covid></div>
      <div className={style.img2}><Covid image="./Assests/blog1.png" height="320px" width="295px"></Covid></div>
      <div className={style.img3}><Covid image="./Assests/blog1.png" height="320px" width="295px"></Covid></div>
      <div className={style.img4}><Covid image="./Assests/Tab.png" height="320px" width="295px"></Covid></div>
      <div className={style.img5}><Covid image="./Assests/Tab.png" height="160px" width="295px"></Covid></div>
      <div className={style.img6}><Covid image="./Assests/Tab.png" height="320px" width="295px"></Covid></div>
      </div>
    </div>
    </>
  )
}
export default SectionB;