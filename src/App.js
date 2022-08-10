import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Filters, OffersList, BottomNav, Footer } from "./components";

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr max-content 1fr 40px;
`;
export default function App() {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [positions, setPositions] = useState([]);
  return (
    <AppContainer>
      <div>
        <Outlet />
      </div>
      <Filters positions={positions} technologies={technologies} setFilteredOffers={setFilteredOffers} offers={offers} />
      <OffersList offers={filteredOffers} />
      <BottomNav />
      <Footer author="Sebastian" />
    </AppContainer>
  );
}
