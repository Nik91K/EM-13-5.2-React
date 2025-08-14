import Footer from "../../components/Footer"
import Header from "../../components/Header"

type PageLayoutPage = {
    children:React.ReactNode
}

function LayoutPage(props:PageLayoutPage) {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}

export default LayoutPage