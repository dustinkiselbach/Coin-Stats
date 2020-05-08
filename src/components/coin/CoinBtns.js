import React from 'react'
import classnames from 'classnames'

const CoinBtns = ({ onClick, metric, color }) => {
  console.log(metric)

  return (
    <div className='coin-btns'>
      <button
        className={classnames('coin-btn btn', {
          toggled: metric === '1d'
        })}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        1d
      </button>
      <button
        className={classnames('coin-btn btn', {
          toggled: metric === '30d'
        })}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        30d
      </button>
      <button
        className={classnames('coin-btn btn', {
          toggled: metric === '365d'
        })}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        365d
      </button>
    </div>
  )
}

export default CoinBtns
