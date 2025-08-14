import type { ProductType } from "../../types/ProductType"

function SecondCard(props:ProductType) {

  return (
    <>
       <div className="card">
      <div className="content">
        <div className="title">
            <p>{props.title} </p>
            </div>
        <div className="img">
          <img src={props.img}></img>
        </div>
      </div>
        <button>
          {props.buttonName}
        </button>
  </div>
    </>
  )
}

export default SecondCard