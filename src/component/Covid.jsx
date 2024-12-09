import style from "./Covid.module.css"
function Covid({ image, height, width }) {
  return (
    <>
      <div className={style.IMG}>
        <div className={style.tag}>
          <img src={image} alt="Covid-19" height={height} width={width} />
          <div className={style.image}>
          <img src="./Assests/tag.png" alt="img" height="25px" />
          </div>
        </div>
        
      </div>
    </>
  )
}
export default Covid;