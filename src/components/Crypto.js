import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Spinner, Button, Card } from 'react-bootstrap'

import { computeDollars } from '../utilities/format'

const baseUrl = 'https://api.coincap.io/v2/assets/'

export default function Crypto(props) {
  const [value, setValue] = useState({})

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
          <p class="data">{computeDollars(value.data.priceUsd)}</p>
          <h4>Symbol: </h4>
          <p class="data">{value.data.symbol}</p>
          <Button variant="warning" onClick={refreshPrice}>
            Refresh
          </Button>
        </div>
      ) : (
        <div className="spinner text-center">
          <Button variant="warning" onClick={refreshPrice}>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}
    </Card>
  )
}
