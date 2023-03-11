import Button from './components/Button'

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
          <div className="examples">
            <div className="row">
              <div className="example">
                <p className="element-heading">&lt;Button /&gt;</p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">&amp;:hover, &amp;:focus</p>
                <Button className="hover" />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button variant="outline" /&gt;
                </p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">&amp;:hover, &amp;:focus</p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button variant="text" /&gt;
                </p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">&amp;:hover, &amp;:focus</p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button disableShadow /&gt;
                </p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">&lt;Button disabled /&gt;</p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">
                  &lt;Button variant="text" disabled /&gt;
                </p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button startIcon="local_grocery_store" /&gt;
                </p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">
                  &lt;Button endIcon="local_grocery_store" /&gt;
                </p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">&lt;Button size="sm" /&gt;</p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">&lt;Button size="md" /&gt;</p>
                <Button />
              </div>
              <div className="example">
                <p className="element-heading">&lt;Button size="lg" /&gt;</p>
                <Button />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="default" /&gt;
                  </p>
                  <Button />
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button />
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="primary" /&gt;
                  </p>
                  <Button />
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button />
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="secondary" /&gt;
                  </p>
                  <Button>Secondary</Button>
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button>Secondary</Button>
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="danger" /&gt;
                  </p>
                  <Button>Danger</Button>
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button>Danger</Button>
                </div>
              </div>
            </div>
          </div>
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
