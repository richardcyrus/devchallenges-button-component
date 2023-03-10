function App() {
  return (
    <div className="container">
      <section className="sidebar">
        <h1 className="nameplate">
          <span className="colored-nameplate">Dev</span>challenges.io
        </h1>
        <nav className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <button type="button" className="button nav-link">
                Inputs
              </button>
            </li>
            <li className="nav-item nav-active">
              <button type="button" className="button nav-link">
                Buttons
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section className="content">
        <div className="main">
          <h2 className="section-title">Buttons</h2>
        </div>
        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY"
              target="_blank"
            >
              devChallenges.io
            </a>
            . Coded by{' '}
            <a
              href="https://www.richardcyrus.com"
              className="text-bold line-link"
            >
              Richard Cyrus
            </a>
            .
          </div>
        </footer>
      </section>
    </div>
  )
}

export default App
