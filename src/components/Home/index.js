// Write your JS code here
import './index.css'
import Header from '../Header'
const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-mobile-image"
          alt="clothes that get you noticed"
        />
        <p className="home-contant">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashon makes you been seen and heard that
          way you are. So, celebrate the seasons new exciting fashion in your
          own way.
        </p>
        <button type="button" className="home-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="home-desktop-image"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)

export default Home
