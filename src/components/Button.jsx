function ClickMe() {
  return <span>Click Me!</span>;
}

function Button({
  Content = ClickMe,
  style = {},
  className = "button",
  id,
  onClick,
  key,
}) {
  return (
    <button className={className} id={id} style={style} onClick={onClick}>
      <Content />
    </button>
  );
}

export default Button;
