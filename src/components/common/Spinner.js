import React from 'react'
import spinner from './Spinner.gif'

const Spinner = () => {
  return (
    <div style={{ height: '105vh' }}>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Spinner
