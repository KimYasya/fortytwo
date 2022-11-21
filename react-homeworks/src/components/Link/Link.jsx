import "./Link.css";

export default function Link(props) {

  const { href, id, name } = props;

  const className = "link";

  return (
   
      <a className={className} href={href} id={id} >{name}</a>
  )
}