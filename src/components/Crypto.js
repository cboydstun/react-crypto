import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import { Spinner } from 'react-bootstrap'

const baseUrl = 'https://api.coincap.io/v2/assets/bitcoin'

export default function Bitcoin() {
  const [value, setValue] = useState({})

  let dollarUSA = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  //make API call to get bitcoin data
  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        setValue(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const refreshPrice = () => {
    axios
      .get(baseUrl, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        setValue(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="card">
      {value.data ? (
        <div>
          <h1>Name: {value.data.name}</h1>
          <h2>Price: {dollarUSA.format(value.data.priceUsd)}</h2>
          <h3>Symbol: {value.data.symbol}</h3>
          <Button onClick={refreshPrice}>Button</Button>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  )
}
