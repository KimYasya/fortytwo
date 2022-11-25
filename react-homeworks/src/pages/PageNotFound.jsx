import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styled from "styled-components";

export default function PageNotFound() {

  const Container = styled.div`
    max-width: 1500px;
    margin: 0;
    padding: 0px 50px 0px 50px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    font-family: "Inter";
    font-size: 16px;
  `

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    gap: 40px;
    flex-grow: 1;
  `

  const NoPage = styled.span`
    font-size: 40px;
    font-weight: 900;
  `

  const Sorry = styled.span`
    font-size: 40px;
    font-weight: 900;
  `

  const MainLink = styled.span`
    color: #F36223;
  `


  return (
    <body>
      <Header />

      <Container>

        <MainContainer>

          <img src="./img/i want to believe.png" alt="i want to believe" />
          <NoPage>But there is no page here</NoPage>
          <Sorry>Sorry</Sorry>
          <MainLink><Link to="/">Try the home page</Link></MainLink>

        </MainContainer>

      </Container>

      <Footer />
    </body>
  )

}