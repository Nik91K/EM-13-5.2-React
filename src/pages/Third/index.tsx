import Card from "../../components/Card";
import thirdcardDate from '../../fixture/thirdPage.json'
import LayoutPage from "../../layouts/page";
import type { PlanType } from "../../types/PlanType";
import './style.css'

const ThirdPage = () => {
  const plans: PlanType[] = thirdcardDate

  return (
    <LayoutPage>
      <div className="third-page">
      {plans.map((card) => (
        <Card key={card.id} title={card.title} buttonText={card.buttonName}>
          <p>{card.description} <span>{card.price}</span></p>
        </Card>
      ))}
      </div>
    </LayoutPage>
  )
}

export default ThirdPage