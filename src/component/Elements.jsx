import style from "./Elements.module.css"
const Elements = ({ Img ,content, paragraph})=>{
  return (
    <>
      <div className={style.elem}>
        <img src={Img} alt="" height="80px" />
        <div className={style.Text}><p>{content}</p>
          <div className={style.p}><p>{paragraph}</p></div>
        </div>
      </div>
    </>
  )
}
export default Elements;