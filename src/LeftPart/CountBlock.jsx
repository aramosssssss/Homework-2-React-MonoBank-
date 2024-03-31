export function CountBlock() {
  return (
    <div className="count-block__flex">
      <div className="count-block">
        <div className="acc-part">
          <img
            className="count-block__img"
            src="https://send.monobank.ua/img/collected.svg"
            alt="acc-part__img"
          />
          <div className="acc-part__title">
            <span>Accumulated</span>
            <p id="acc-p">0 ₴</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="goal-part">
          <img
            className="count-block__img"
            src="https://send.monobank.ua/img/target.svg"
            alt="goal-part__img"
          />
          <div className="goal-part__title">
            <span>Goal</span>
            <p id="goal-p">10 000 ₴</p>
          </div>
        </div>
      </div>
    </div>
  );
}
