import React, { Fragment } from 'react'

const CoinInfo = ({ metaData }) => {
  return (
    <Fragment>
      {metaData ? (
        <div className='coin-info'>
          <p>
            <span className='coin-info__title'>About:</span>{' '}
            {metaData.description}
          </p>
          <a href={metaData.website_url}>
            <span className='coin-info__title'>Website:</span>{' '}
            {metaData.website_url}
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  )
}

export default CoinInfo
