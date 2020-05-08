import React, { useContext, useEffect } from 'react'
import CoinContext from '../../context/coin/coinContext'
import { Link } from 'react-router-dom'
import Spinner from '../common/Spinner'

const Home = () => {
  const coinContext = useContext(CoinContext)
  const { rankings, getRankings } = coinContext

  useEffect(() => {
    getRankings()
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [])

  return (
    <section className='home'>
      <h1 className='home__title title-primary'>Coin Stats</h1>
      <p className='home__about lead'>
        Coin Stats is a small webapp for checking crypto currency prices
      </p>
      <Link to='/prices/btc' className='btn'>
        Check Price
      </Link>
      {rankings ? (
        <ul className='home__rankings'>
          {rankings.map((ranking, index) => (
            <li className='home__rankings--ranking' key={ranking.CoinInfo.Id}>
              <span>{index + 1}.</span>
              <Link to={`/prices/${ranking.CoinInfo.Name}`}>
                {' '}
                {ranking.CoinInfo.Name}
              </Link>
              <span>{ranking.DISPLAY.USD.PRICE}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      <small>
        rankings based on total volume today, this app is a prototype and
        shouldn't be used for trading
      </small>
    </section>
  )
}

export default Home
