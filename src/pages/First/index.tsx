import LayoutPage from "../../layouts/page"
import firstCardDate from '../../fixture/firstPage.json'
function FirstPage() {

  return (
    <>
    <LayoutPage>
         <div className='first-page'>
        {
          firstCardDate.map(object => {
          return <FirstCard key={object.id} {...object}/>
          })}
        </div>
    </LayoutPage>
    </>
  )
}

export default FirstPage