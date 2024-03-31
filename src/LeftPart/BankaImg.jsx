export function BankaImg() {
  return (
    <div className="banka-img">
      <div className="banka__bg">
        <img
          id="banka__bg"
          src="https://send.monobank.ua/img/jar_bg.png"
          alt="background"
        />
      </div>
      <div className="banka-img">
        <img
          id="banka__img
          "
          src="https://send.monobank.ua/img/jar/uah_33.png"
          alt="banka-img"
        />
      </div>
      <div className="scale_of_goal">
        <img src="https://send.monobank.ua/img/jar/grid.png" alt="scale" />
        <div className="scale__goal">10&nbsp000</div>
        <div className="scale__middle">5&nbsp000</div>
        <div className="scale__bottom">0</div>
      </div>
    </div>
  );
}
