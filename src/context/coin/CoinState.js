import React, { useReducer } from 'react'
import CoinContext from './coinContext'
import coinReducer from './coinReducer'
import axios from 'axios'
import {
  GET_TICKER,
  GET_TICKER_HISTORY,
  GET_META_DATA,
  GET_RANKINGS,
  SET_LOADING
} from '../types'

const CoinState = props => {
  const initialState = {
    ticker: null,
    tickerHistory: null,
    metaData: null,
    rankings: null,
    loading: false
  }

  const [state, dispatch] = useReducer(coinReducer, initialState)

  // Get Ticker from ticker  ID
  const getTicker = async id => {
    setLoading()
    try {
      const res = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?key=5bf4f163969b105d5fa78035c95a3e10&ids=${id.toUpperCase()}&interval=1h,1d,30d,365d,ytd`
      )
      dispatch({ type: GET_TICKER, payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // Get Ticker History from ticker Id
  const getTickerHistory = async (id, from) => {
    setLoading()
    try {
      const res = await axios.get(
        `https://api.nomics.com/v1/currencies/sparkline?key=5bf4f163969b105d5fa78035c95a3e10&ids=${id.toUpperCase()}&start=${from}%3A00%3A00Z`
      )
      dispatch({ type: GET_TICKER_HISTORY, payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // Get the METAAAADATTAAAA
  const getMetaData = async id => {
    setLoading()
    try {
      const res = await axios.get(
        `https://api.nomics.com/v1/currencies?key=5bf4f163969b105d5fa78035c95a3e10&ids=${id.toUpperCase()}&attributes=id,name,description,website_url`
      )
      dispatch({ type: GET_META_DATA, payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // Get Coin Rankings

  const getRankings = async id => {
    setLoading()
    try {
      const res = await axios.get(
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
      )
      dispatch({ type: GET_RANKINGS, payload: res.data.Data })
    } catch (err) {
      console.log(err)
    }
  }

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <CoinContext.Provider
      value={{
        ticker: state.ticker,
        tickerHistory: state.tickerHistory,
        metaData: state.metaData,
        rankings: state.rankings,
        loading: state.loading,
        getTicker,
        getTickerHistory,
        getRankings,
        getMetaData
      }}
    >
      {props.children}
    </CoinContext.Provider>
  )
}

export default CoinState
