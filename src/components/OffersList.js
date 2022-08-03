import React from "react";

import styled from 'styled-components'

const List = styled.div({
  display: "flex",
  justifyContent: "center"
})

function OffersList({ offers }) {
  return (
    <List>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>POSITION</td>
            <td>TECHNOLOGIES</td>
            <td>REMOTE</td>
            <td>PRICE RANGE</td>
          </tr>
        </thead>
        <tbody>
          {offers.map(
            ({ id, name, position, technologies, remote, priceRange }) => (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{position}</td>
                <td>{technologies.join(", ")}</td>
                <td>{remote.toString()}</td>
                <td>{priceRange?.join(" - ")}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </List>
  );
}

export default OffersList;
