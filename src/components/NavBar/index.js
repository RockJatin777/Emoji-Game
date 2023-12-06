import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar">
      <div className="nav-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="list-items"> Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="nav-items">
          <p className="list-items">Score: {currentScore}</p>
          <p className="list-items">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
