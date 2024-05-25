// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const textClass = isDarkTheme ? 'homeLightText' : 'homeDarkText'

      const backgroundClass = isDarkTheme
        ? 'homeLightBackground'
        : 'homeDarkBackground'

      return (
        <div className={`homeContainer ${backgroundClass}`}>
          <Navbar />
          <div className="homeContentContainer">
            <div className="homeContent">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="homeImage"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="homeImage"
                />
              )}
              <h1 className={`homeHeading ${textClass}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
