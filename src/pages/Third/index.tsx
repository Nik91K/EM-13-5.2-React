import Card from "../../components/Card";
import thirdcardDate from '../../fixture/thirdPage.json'
import LayoutPage from "../../layouts/page";
import type { PlanType } from "../../types/PlanType";

const ThirdPage = () => {
  const plans: PlanType[] = thirdcardDate

  return (
    <LayoutPage>
      {plans.map((card) => (
        <Card key={card.id} title={card.title} buttonText={card.buttonName}>
          <p>{card.description} <span>{card.price}</span></p>
        </Card>
      ))}
    </LayoutPage>
  )
}

export default ThirdPage