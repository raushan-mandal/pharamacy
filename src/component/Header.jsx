import styles from "./Header.module.css"
function Header() {
  return (

    <>
      <div className={styles.header}>
        <h1>Essential Vitamins</h1>
        <img src="./Assests/probiotics.png" alt="img" height="220px" className={styles.item} />
        <div className={styles.img}></div>
        <div className={styles.left_div}>
          <div className={styles.p1}><p>Online Medical Supplies</p></div>
          <div className={styles.p2}><p>Get Your Vitamins & Minerals</p></div>
          <button>Explore</button>
        </div>
        <div className={styles.right_div}>
          <div className={styles.div1}>
            <img src="./Assests/Vitamines.png" alt="" height="54px" width="55px" className={styles.one}/>
            <h5>Vitamins</h5>
           <p className={styles.p}>Increased Vitamins and minerals in your diet</p>
          </div>
          <div className={styles.div2}>
          <img src="./Assests/weight.png" alt="" height="54px" width="55px" className={styles.two}/>
            <h5>Weight Loss</h5>
           <p className={styles.p}> Weight Loss Find scientifically proven solutions</p>
          </div>
          <div className={styles.div3}>
          <img src="./Assests/function.png" alt="" height="54px" width="55px" className={styles.three}/>
            <h5>Functional Foods</h5>
            <p className={styles.p}>Functional Foods From protein powers to baby formula</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;