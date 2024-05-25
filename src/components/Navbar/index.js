// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const textClass = isDarkTheme ? 'lightText' : 'darkText'

      const backgroundClass = isDarkTheme ? 'darkBackground' : 'lightBackground'

      return (
        <div className={`navbarContainerMain ${backgroundClass}`}>
          <div className="navbarContainer">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="websiteLogo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="websiteLogo"
                alt="website logo"
              />
            )}

            <ul className="menuContainer">
              <li>
                <Link className="homeLink" to="/">
                  <button type="button" className={`homeButton ${textClass}`}>
                    Home
                  </button>
                </Link>
              </li>

              <li>
                <Link className="aboutLink" to="/about">
                  <button type="button" className={`aboutButton ${textClass}`}>
                    About
                  </button>
                </Link>
              </li>
            </ul>

            <button
              className="toggleButton"
              type="button"
              data-testid="theme"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="Theme"
                  className="themeImage"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="Theme"
                  className="themeImage"
                />
              )}
            </button>
          </div>
          <hr className="navbarHr" />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
