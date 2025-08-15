import Card from "../../components/Card";
import LayoutPage from "../../layouts/page"
import secondCardDate from '../../fixture/secondPage.json'
import type { ProductType } from '../../types/ProductType'
import './style.css'

function SecondPage() {
  const product: ProductType[] = secondCardDate

  return (
    <LayoutPage>
      <div className="second-page">
      {product.map((card) => (
        <Card key={card.id} title={card.title} buttonText={card.buttonName}>
          <img src={card.img} alt={card.title} />
        </Card>
      ))}
      </div>
    </LayoutPage>
  )
}

export default SecondPage