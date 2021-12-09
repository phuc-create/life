import React from 'react'

const Background = function ({ img }) {
  const style = { '--image': `url(${img})` }
  return (
    <div className="background-control" style={style} />
  )
}

export default Background
