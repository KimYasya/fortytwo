import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/reducers/cart-reducer";
import { addProductToFav, removeProductFromFav } from "../../store/reducers/fav-reducer";
import "./Sidebar.css";
import Button from "../Button";
import Like from "../Like/Like";
import ActiveLike from "../Like/ActiveLike";


export default function Sidebar(props) {

  const { product } = props;

  const [sidebarLike, setSidebarLike] = useState(false);
  const products = useSelector((store) => store.cart.products);

  const hasInCart =  products.some((prevProduct) => {
    return prevProduct.id === product.id;
  });

  const currentFavProducts = useSelector((store) => store.fav.products)
  
  const dispatch = useDispatch();

  const handleClicksidebarBtn = (e, product) => {
    dispatch(addProduct(product));
  }

  const handleRemoveBtn = (e, product) => {
    dispatch(removeProduct(product));
  }

  const handleClickSidebarLike = () => {
    dispatch(addProductToFav(product))
    setSidebarLike(!sidebarLike)
    if (currentFavProducts.length > 0 ) {
      dispatch(removeProductFromFav(product))
    } 
  }

  return (
    <div className="sidebar">

      <div className="sidebar__buy">
        <div className="sidebar__first-line">
          <div className="sidebar__old-price">
            <div className="sidebar__cost1">
              <span>75 990₽</span>
            </div>

            <div className="sidebar__discount">
              <span>-8%</span>
            </div>
          </div>

          <div className="sidebar__like" onClick={handleClickSidebarLike}>
            {currentFavProducts.length > 0 ?
              <ActiveLike />
              :
              <Like />
            }

          </div>
        </div>

        <div className="sidebar__cost2">
          <span>67 990₽</span>
        </div>

        <div className="sidebar__delivery">
          <span>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></span>
          <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>

          {hasInCart ? (<Button
            type={`submit`}
            className={"active-sidebar_btn"}
            onClick={(e) => handleRemoveBtn(e, product)}
            name={"Товар добавлен"}
          >{ }
          </Button>) :
            (<Button
              type={`submit`}
              className={"sidebar__button_buy"}
              onClick={(e) => handleClicksidebarBtn(e, product)}
              name={"Добавить в корзину"}
            >{ }
            </Button>)}

        </div>
      </div>

      <div className="sidebar__frame">
        <span>Реклама</span>
        <iframe className="sidebar__framelook" src="../frames/VanGog.html" title="add-frame-one">
        </iframe>
        <iframe className="sidebar__framelook1" src="../frames/VanGog.html" title="add-frame-two">
        </iframe>
      </div>

    </div>
  )
}
