import { Title } from './Title';
import { BankaImg } from './BankaImg';
import { InfoBlock } from './InfoBlock';
import { CountBlock } from './CountBlock';

export function LeftPartCard() {
  return (
    <div className="left-part__card">
      <Title />
      <BankaImg />
      <InfoBlock />
      <CountBlock  />
    </div>
  );
}
