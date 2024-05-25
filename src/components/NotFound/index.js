// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const textClass = isDarkTheme ? 'notFoundLightText' : 'notFoundDarkText'

      const textClassPara = isDarkTheme
        ? 'notFoundLightTextPara'
        : 'notFoundDarkTextPara'

      const backgroundClass = isDarkTheme
        ? 'notFoundLightBackground'
        : 'notFoundDarkBackground'

      return (
        <div className={`notFoundContainer ${backgroundClass}`}>
          <Navbar />
          <div className="notFoundContentContainer">
            <div className="notFoundContent">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="notFoundImage"
              />
              <h1 className={`notFoundHeading ${textClass}`}>Lost Your Way?</h1>
              <p className={`notFoundPara ${textClassPara}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
