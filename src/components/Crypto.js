import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://api.coincap.io/v2/assets/bitcoin'

export default function Bitcoin() {
  const [value, setValue] = useState({})

  //make API call
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

  return (
    <div>
      {value.data ? (
        <div>
          <h1>{value.data.name}</h1>
          <h2>{value.data.priceUsd}</h2>
          <h3>{value.data.symbol}</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}
