import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <Container>
        <Section
          title="Model S"
          desc="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bgImg="model-s.jpg"
        />

        <Section
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bgImg="model-3.jpg"
        />

        <Section
          title="Model X"
          desc="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bgImg="model-x.jpg"
        />

        <Section
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          bgImg="model-y.jpg"
        />

        <Section
          title="Lowest Cost Solar Panels in USA"
          desc="Money-back guarantee"
          leftBtn="Order Now"
          rightBtn="Learn More"
          bgImg="solar-panel.jpg"
        />

        <Section
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          leftBtn="Order Now"
          rightBtn="Learn More"
          bgImg="solar-roof.jpg"
        />

        <Section
          title="Accessories"
          desc=""
          leftBtn="Shop Now"
          rightBtn=""
          bgImg="accessories.jpg"
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory ;
`;

export default Home;
