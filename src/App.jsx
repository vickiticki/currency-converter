import axios from 'axios'
import React, { useEffect, useState } from 'react'

// https://api.exchangeratesapi.io/v1/latest
//     ? access_key = 56a4348392b313cd26250dccbcbb645f
//     & base = USD

// example
// {
//   "success": true,
//   "timestamp": 1519296206,
//   "base": "EUR",
//   "date": "2021-03-17",
//   "rates": {
//       "AUD": 1.566015,
//       "CAD": 1.560132,
//       "CHF": 1.154727,
//       "CNY": 7.827874,
//       "GBP": 0.882047,
//       "JPY": 132.360679,
//       "USD": 1.23396,
//   [...]
//   }
// }

export function App() {
  //hook

  const [currencies, setCurrencies] = useState([])
  const [amount, setAmount] = useState(1)

  // wtfwtfwtfWTF
  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=6ade5e554ffd27201ecdba4aba8c6bac'
    )
    if (response.status === 200) {
      console.log(response.data.rates)
      setCurrencies(response.data.rates)
    }
  }, [])

  //functions

  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      {/* input box */}
      <label>Amount in USD: </label>
      <input
        type="number"
        id="dollars"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      {/* conversion */}

      {/* List of rates */}
      {/* <p>{rates.rates}</p> */}
      <ul>
        {Object.entries(currencies).map(([rabbit]) => {
          return <li>{rabbit}</li>
        })}
      </ul>
    </div>
  )
}
