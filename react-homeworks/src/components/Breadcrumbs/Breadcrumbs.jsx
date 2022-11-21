import "./Breadcrumbs.css";
import Link from "../Link/Link";

export default function Breadcrumbs() {

  const Links = [
    {
      id: 1111,
      name: "Электроника",
      href: "http://localhost:3000",
    },
    {
      id: 1112,
      name: "Смартфоны и гаджеты",
      href: "http://localhost:3000",
    },
    {
      id: 1113,
      name: "Мобильные телефоны",
      href: "http://localhost:3000",
    },
    {
      id: 1114,
      name: "Apple",
      href: "http://localhost:3000",
    },
  ]

  const className = "link";

  return (
    <nav>
      <div className="breadcrumbs">
       
        {Links.map(function (link) {
          return <div> 
            <Link key={ link.id }
              className={ className }
              href={ link.href }
              name={ link.name }
            >{link.name}</Link>
            <span className={`separator ${link.name === "Apple" ? "hidden" : ""}`}>{">"}</span>  
            </div>
           })}
        
       

      </div>
    </nav>

  )
}

