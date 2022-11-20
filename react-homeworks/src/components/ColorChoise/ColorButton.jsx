export default function ColorButton(props) {

  const { id, color, src, actived, ...restProps } = props;

  const className = `img ${actived ? "actived" : ""}`;
  

  return (
    <div className="choice">
      <button { ...restProps } id={ id } color={ color } src={ src } className={ className } actived={ actived } >
        <img src={ src } alt="" height="60" />
      </button>
    </div>
  );
}