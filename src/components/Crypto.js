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
      .get(baseUrl + props.asset)
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
      .get(baseUrl + props.asset)
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
          <h4>Name: </h4>
          <p class="data">{value.data.name}</p>
          <h4>Price: </h4>
          <p class="data">{dollarUSA.format(value.data.priceUsd)}</p>
          <h4>Symbol: </h4>
          <p class="data">{value.data.symbol}</p>
          <Button onClick={refreshPrice}>Refresh</Button>
        </div>
      ) : (
        <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <br />
        <Button onClick={refreshPrice}>Refresh</Button>
        </div>
      )}
    </Card>
  )
}
