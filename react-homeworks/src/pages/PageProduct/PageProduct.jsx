import React from "react";
import "./PageProduct.css";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ColorChoise from "../../components/ColorChoise/ColorChoise";
import ConfigList from "../../components/ConfigList/ConfigList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";
import Description from "../../components/Description/Description";
import Features from "../../components/Features/Features";
import Preview from "../../components/Preview/Preview";

export default function PageProduct() {
  return (
    <>

      <Header />

      <div className="container">

        <Breadcrumbs />

        <main>

          <Preview />

          <div className="product-about">
            <div className="product-info">

              <ColorChoise />
              <ConfigList />
              <Features />
              <Description />
              <Table />
              <ReviewsList />
              <ReviewForm />

            </div>

            <Sidebar />

          </div>

        </main>

      </div>

      <Footer />

    </>
  )
}
