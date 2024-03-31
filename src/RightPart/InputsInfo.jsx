export function InputInfo() {
  return (
    <div className="inputs__info">
      <div className="input__name-box">
        <input
          type="text"
          className="input__name"
          placeholder="Your name (optional)"
        />
      </div>
      <div className="input__comment-box">
        <input
          type="text"
          className="input__comment"
          placeholder="Comment (optional)"
        />
      </div>
    </div>
  );
}
