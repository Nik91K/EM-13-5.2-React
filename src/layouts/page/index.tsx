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