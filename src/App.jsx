import Logo from "./component/logo";
import Header from "./component/Header";
import Section from "./component/Section";
import Sections from "./component/Sections";
import SectionB from "./component/SectionB";
import style from "./App.module.css";
function App(){
return <>
<div className="main">
<Logo></Logo>
<Header></Header>
<Section></Section>
<Sections></Sections>
</div>
<div className={style.div3}>
  <div className={style.content}>
  <p className={style.p2}>OUR BLOG</p>
  <h2 className={style.E2}>Latest News</h2>
  </div>
</div>
<SectionB></SectionB>
</>
}
export default App;