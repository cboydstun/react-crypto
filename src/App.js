import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";

import Crypto from "./components/Crypto";

import "./App.css";

export default function App() {
  const [value, setValue] = useState("bitcoin");

  return (
    <div className="App">
      <Container>
        {/* create a dropdown menu that selects various blockchain assets and passes them as props */}

        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Select Blockchain Asset
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setValue("bitcoin")}>
              Bitcoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("ethereum")}>
              Ethereum
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("bitcoin-cash")}>
              Bitcoin Cash
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("litecoin")}>
              Litecoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("cardano")}>
              Cardano
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {value && <Crypto asset={value} />}
      </Container>
    </div>
  );
}
