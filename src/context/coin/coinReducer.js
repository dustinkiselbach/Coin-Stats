import {
  GET_TICKER,
  GET_TICKER_HISTORY,
  GET_META_DATA,
  GET_RANKINGS,
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TICKER:
      return {
        ...state,
        ticker: action.payload[0],
        loading: false
      }
    case GET_TICKER_HISTORY:
      return {
        ...state,
        tickerHistory: action.payload[0],
        loading: false
      }
    case GET_META_DATA:
      return {
        ...state,
        metaData: action.payload[0],
        loading: false
      }
    case GET_RANKINGS:
      return {
        ...state,
        rankings: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
