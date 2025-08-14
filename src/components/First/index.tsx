import type {СourseType} from '../../types/СourseType'
import './style.css'

function FirstCard(props:СourseType) {

  return (

    <div className="card">
      <div className="content">
        <div className="title">
            <p>{props.title} </p>
            </div>
        <p>{props.list.flat()}</p>
        <button>
          {props.buttonName}
        </button>
        </div>
  </div>

  )
}

export default FirstCard