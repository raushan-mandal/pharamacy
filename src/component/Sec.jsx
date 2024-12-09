import style from "./Sec.module.css"
function Sec({Vita, Cont}){
  return (
    <>
    <div className={style.comp}>
      <h4 className={style.Vita}>{Vita}</h4>
      <p className={style.Cont}>{Cont}</p>
      <button className={style.see}>see more</button>
    </div>
    </>
  )
}
export default Sec;