import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import Crypto from './components/Crypto'

import './App.css'

export default function App() {
  const [value, setValue] = useState('bitcoin')

  return (
    <div className="App">
      {/* create a dropdown menu that selects various blockchain assets and passes them as props */}

      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Blockchain Asset
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setValue('bitcoin')}>
            Bitcoin
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('ethereum')}>
            Ethereum
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('cardano')}>
            Cardano
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {value && <Crypto asset={value} />}
    </div>
  )
}
