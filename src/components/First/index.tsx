import type { ProductType } from '../../types/ProductType'
import './style.css'

function FirstCard(props: ProductType) {

  return (
    <>
    <div className="card">
      <div className="content">
        <div className="title">
            <p>{props.title} </p>
            </div>
        <div className="price">
          <p>{props.price}</p>
        </div>
        <div className="description">
          <p> {props.description}</p>
        </div>
      </div>
        <button>
          {props.buttonName}
        </button>
  </div>
    </>
  )
}

export default FirstCard