export function ButtonsPay() {
  return (
    <div className="buttons__pay">
      <div className="button__monopay">
        <button type="button" id="btn__mono" className="btn__mono-img">
          <img
            src="https://send.monobank.ua/img/mono_pay.svg"
            alt="mono"
            className="btn__mono-img"
          />
        </button>
      </div>
      <div className="button__googlepay">
        <button type="button" id="btn__google">
          <img
            src="img/googlePay.png"
            alt="google"
            className="btn__google-img"
          />
        </button>
      </div>
    </div>
  );
}
