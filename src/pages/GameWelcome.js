import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useHref } from 'react-router-dom'
import Button from '../customs/Button'

const GameWelcome = function () {
  const [redirect, setRedirect] = React.useState(false)
  const navigate = useNavigate()
  const onFadedRedirect = () => {
    setTimeout(() => {
      setRedirect(!redirect)
    }, 1500)
    setTimeout(() => {
      navigate('/new')
    }, 3000)
  }
  return (
    <div className="game-touch-start">
      <Button
        style={{ opacity: redirect ? 0 : 1 }}
        onClick={onFadedRedirect}
        content="Enjoy Story"
      />
    </div>
  )
}

export default GameWelcome
