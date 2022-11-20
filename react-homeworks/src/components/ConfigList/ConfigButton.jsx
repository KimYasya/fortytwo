export default function ConfigButton(props) {

  const { id, memory, actived, ...restProps } = props;

  const className = `btn ${actived ? "activedBtn" : ""}`;

  return (

    <button { ...restProps } id={ id } memory={ memory } className={ className } actived={ actived } >
      { memory }
    </button>
  )
}