import Footer from "../../components/Footer"
import Header from "../../components/Header"
import './style.css'
type PageLayoutPage = {
    children:React.ReactNode
}

function LayoutPage(props:PageLayoutPage) {
  return (
    <>
    <Header/>
      <div className="page-content">
        {props.children}
      </div>
    <Footer/>
    </>
  )
}

export default LayoutPage