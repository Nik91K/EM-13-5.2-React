import ThirdCard from "../../components/ThirdCard"
import LayoutPage from "../../layouts/page"
import thirdCardDate from '../../fixture/thirdPage.json'
function ThirdPage() {

  return (
    <>
    <LayoutPage>
        <div className='third-card'>
    {
      thirdCardDate.map(object => {
      return <ThirdCard key={object.id} {...object}/>
      })}
    </div>
    </LayoutPage>
    </>
  )
}

export default ThirdPage