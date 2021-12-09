import React from 'react'

const Bigtitle = function ({ faded }) {
  const style = {
    opacity: faded ? 1 : 0,
    fontSize: '110px',
    fontStyle: 'italic',
    fontWeight: '700',
    letterSpacing: '2px',
    transition: '0.5s',
  }
  return (
    <div style={style}>
      Life
    </div>
  )
}

export default Bigtitle
