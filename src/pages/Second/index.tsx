import SecondCard from "../../components/SecondCard"
import LayoutPage from "../../layouts/page"
import secondCardDate from '../../fixture/secondPage.json'
function SecondPage() {

  return (
    <>
    <LayoutPage>
        <div className='second-page'>
    {
      secondCardDate.map(object => {
      return <SecondCard key={object.id} {...object}/>
      })}
    </div>
    </LayoutPage>
    </>
  )
}

export default SecondPage