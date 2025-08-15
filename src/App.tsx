
import './App.css'
import LayoutPage from './layouts/page'
import catGif from "./assets/cat.gif";



function App() {

  return (
    <>
    <LayoutPage>
      <p>Hello user!</p>
         <img src={catGif} alt="Котик" style={{ width: "300px", height: "auto" }} />
    </LayoutPage>


    </>
  )
}

export default App
