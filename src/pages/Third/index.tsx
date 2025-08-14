import ThirdCard from "../../components/ThirdCard"
import LayoutPage from "../../layouts/page"
import thirdCardDate from '../../fixture/thirdPage.json'
function ThirdPage() {

  return (
    <>
<<<<<<< HEAD

=======
    <LayoutPage>
        <div className='third-card'>
    {
      thirdCardDate.map(object => {
      return <ThirdCard key={object.id} {...object}/>
      })}
    </div>
    </LayoutPage>
>>>>>>> ced3994ebd11a065f4d04c0abf9b7449f99b83e5
    </>
  )
}

export default ThirdPage