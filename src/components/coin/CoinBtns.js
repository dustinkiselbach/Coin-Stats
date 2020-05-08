import React from 'react'

const CoinBtns = ({ onClick, color }) => {
  return (
    <div className='coin-btns'>
      <button
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        1d
      </button>
      <button
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        30d
      </button>
      <button
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        365d
      </button>
    </div>
  )
}

export default CoinBtns
