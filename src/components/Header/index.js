import {withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <div className="header-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="nav-buttons">
        <ul className="nav-menu">
          <li>Home</li>
          <li>Products</li>

          <li>Cart</li>
        </ul>
        <button type="button" className="logout">
          Logout
        </button>
      </div>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
    <div className="icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default withRouter(Header)
