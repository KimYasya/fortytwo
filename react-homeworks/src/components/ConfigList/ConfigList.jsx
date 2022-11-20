import { useState } from "react";
import "./ConfigList.css";

export default function ConfigList() {
  let [activedButton, setActivedButton] = useState("");
  const numbers = [ "128 Гб", "256 Гб", "512 Гб"];

  return (
    <div className="product-info__subsection">
      <div className="headers">
        <h4> {`Конфигурация памяти: ${activedButton}`}</h4>
      </div>

      <div className="product-info__buttons">
        {numbers.map(function (number) {
          let actived = number === activedButton;
          let className = `btn ${actived ? "actived" : ""}`;

          return (
            <button className = { className } onClick = { () => {
              setActivedButton(number);
            }}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  )
}  

      
//   Button();

//   function Button(props) {

//   let [selectedButton, setSelectedButton] = useState(0);
//   const { button } = props;

//   return (
    

//       <div className="product-info__buttons">
//         <button>
//               {`${button.memConfig} ${button.uom}`}
//         </button>
//        </div>
  
//   );

//   function Buttons() {
//     const buttons = [ 
//       { 
//         memConfig: 128, 
//         uom: "Гб", 
//       },
//       {
//         memConfig: 256,
//         uom: "Гб",
//       },
//       {
//         memConfig: 512,
//         uom: "Гб",
//       },
//     ];

//     return (
//       <>
//       {buttons.map((button) => (
//         <Button button = {button} />
//       ))}
//       </>
//     )
//   }
// }
// }

  // return (
  //   <div className="product-info__subsection">
  //     <div className="headers">
  //       <h4> {`Конфигурация памяти: ${selectedButton}`}</h4>
  //     </div>

  //     <div className="product-info__buttons">
  //       {buttons.map(function (selectedButton) {
       
  //         let selected = buttons.memConfig === selectedButton;
  //         let className = `button ${selected ? "selected" : ""}`;

  //         return (
  //           <button className = {className} onClick = {() => {
  //             setSelectedButton(buttons.memConfig);
  //           }}
  //           >
  //             {`${buttons.memConfig}`}
  //           </button>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

