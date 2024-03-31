import { useState } from 'react';

export function RightCard() {
  const [total, setTotal] = useState(0);

  const handleButtonClick = (amount) => {
    setTotal((prevTotal) => prevTotal + amount);
    updateTotalAmount(amount);
  };
  return (
    <div className="right__card">
      <div className="right__card-header">
        <p className="right__card-header-p">Top up amount</p>
        <img
          className="right__card-header-img"
          src="https://send.monobank.ua/img/money.png"
          alt="cash_img"
        />
      </div>
      <div className="right__card-amount-input">
        <div className="right__card-amount-input-flex">
          <input
            type="text"
            id="first_name"
            className="input__amount"
            placeholder="0"
            required
            value={total}
          />
          <div className="right__card-amount-hryvna">&nbsp;₴</div>
        </div>
      </div>
      <div className="amount-sub">
        2% processing fee for non-Ukrainian cards
      </div>
      <div
        className="button__container"
        onClick={(e) => {
          e.stopPropagation();
          handleButtonClick(100);
        }}
      >
        <div className="button">
          <p className="button__p-top">+100&nbsp;₴</p>
          <p className="button__p-bot">+2.38&nbsp;€</p>
        </div>
        <div
          className="button"
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick(500);
          }}
        >
          <p className="button__p-top">+500&nbsp;₴</p>
          <p className="button__p-bot">+11.92&nbsp;€</p>
        </div>
        <div
          className="button"
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick(1000);
          }}
        >
          <p className="button__p-top">+1&nbsp;000&nbsp;₴</p>
          <p className="button__p-bot">+23.84&nbsp;€</p>
        </div>
      </div>
    </div>
  );
}
