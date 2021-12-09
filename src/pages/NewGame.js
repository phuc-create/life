import React from 'react'
import { useNavigate } from 'react-router-dom'
import Bg1 from '../images/bg3.jpg'
import Background from '../components/Background'
import Bigtitle from '../components/Bigtitle'
import Button from '../customs/Button'

const NewGame = function () {
  const navigate = useNavigate()

  const [fakeLoading, setFakeLoading] = React.useState(false)
  const [welcome, setWelcome] = React.useState(false)
  const [faded, setFaded] = React.useState(false)
  const [appearBtn, setAppearBtn] = React.useState(false)
  const clearFuncTimeOut = async () => {
    setFakeLoading(false)
    setFakeLoading(false)
  }
  const handlerRedirectToExplore = () => {
    navigate('/explore')
  }
  let pageWelcomeAnimation = async () => {
    setTimeout(() => {
      setWelcome(!welcome)
    }, 1500)

    setTimeout(() => {
      setFaded(!faded)
    }, 3000)
    setTimeout(() => {
      setAppearBtn(!appearBtn)
    }, 4500)

    setTimeout(() => {
        setFakeLoading(!fakeLoading)
    }, 2500)
  }

  React.useEffect(() => {
    pageWelcomeAnimation()
    setTimeout(() => {
      clearFuncTimeOut()
    }, 6500)
    return () => pageWelcomeAnimation = null
  }, [])

  return (
    <div className="new-game">
      <Background img={Bg1} />
      <div className="board-wrap">
        <div style={{
              transition: '0.5s',
              fontWeight: 500,
              opacity: welcome ? 1 : 0,
              fontSize: 20,
        }}
        >
          Welcome to
        </div>
        <Bigtitle faded={faded} />
        <Button style={{ opacity: appearBtn ? 1 : 0 }} content="Explore Story" onClick={handlerRedirectToExplore} />

      </div>
    </div>
  )
}

export default NewGame
