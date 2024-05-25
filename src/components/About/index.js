// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const textClass = isDarkTheme ? 'aboutLightText' : 'aboutDarkText'

      const backgroundClass = isDarkTheme
        ? 'aboutLightBackground'
        : 'aboutDarkBackground'

      return (
        <div className={`aboutContainer ${backgroundClass}`}>
          <Navbar />
          <div className="aboutContentContainer">
            <div className="aboutContent">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="aboutImage"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="aboutImage"
                />
              )}
              <h1 className={`homeHeading ${textClass}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
