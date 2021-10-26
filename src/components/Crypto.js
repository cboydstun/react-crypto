import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import Button from 'react-bootstrap/Button'
import { Spinner, Button, Card } from 'react-bootstrap'

const baseUrl = 'https://api.coincap.io/v2/assets/'

export default function Crypto(props) {
  const [value, setValue] = useState({})

  let dollarUSA = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  useEffect(() => {
    axios
      .get(baseUrl + props.asset, {
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
  }, [props.asset])

  const refreshPrice = () => {
    axios
      .get(baseUrl + props.asset, {
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
    <Card>
      {value.data ? (
        <div className="text-center">
          <h1>Name: {value.data.name}</h1>
          <h2>Price: {dollarUSA.format(value.data.priceUsd)}</h2>
          <h3>Symbol: {value.data.symbol}</h3>
          <Button onClick={refreshPrice}>Refresh</Button>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Card>
  )
}
