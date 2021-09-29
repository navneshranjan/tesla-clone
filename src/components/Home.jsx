import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delevery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Online"
        rightBtnText="Existing Enventery"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delevery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Online"
        rightBtnText="Existing Enventery"
      />
      <Section
        title="Model 3"
        description="Order  For Touchless Delevery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Online"
        rightBtnText="Existing Enventery"
      />
      <Section
        title="Model X"
        description="Order  For Touchless Delevery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Online"
        rightBtnText="Existing Enventery"
      />
      <Section
        title="Lowest cost Solar Pannel"
        description="Monet-Back Guarentee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="know more"
      />
      <Section
        title="Solar for New Roof"
        description="Solar roof cost less than new roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="know more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
      />
    </container>
  );
}

export default Home;
const container = styled.div`
height=100vh;
`;
