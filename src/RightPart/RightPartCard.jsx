import { ButtonsPay } from './ButtonsPay';
import { CardDetails } from './CardDetails';
import { InputInfo } from './InputsInfo';
import { Line } from './Line';
import { RightCard } from './RightCard';

export function RightPartCard() {
  return (
    <div className="right-part__card">
      <RightCard />
      <InputInfo />
      <ButtonsPay />
      <Line />
      <CardDetails />
    </div>
  );
}
