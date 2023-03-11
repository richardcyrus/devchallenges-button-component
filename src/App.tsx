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
                  &lt;Button variant="outline" color="primary" /&gt;
                </p>
                <Button variant="outline" color="primary" />
              </div>
              <div className="example">
                <p className="element-heading">&amp;:hover, &amp;:focus</p>
                <Button variant="outline" color="primary" className="hover" />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button variant="text" color="primary" /&gt;
                </p>
                <Button variant="text" color="primary" />
              </div>
              <div className="example">
                <p className="element-heading">&amp;:hover, &amp;:focus</p>
                <Button variant="text" color="primary" className="hover" />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">
                  &lt;Button disableShadow color="primary" /&gt;
                </p>
                <Button disableShadow color="primary" />
              </div>
            </div>
            <div className="row">
              <div className="example">
                <p className="element-heading">&lt;Button disabled /&gt;</p>
                <Button disabled />
              </div>
              <div className="example">
                <p className="element-heading">
                  &lt;Button variant="text" disabled /&gt;
                </p>
                <Button variant="text" disabled />
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
                <p className="element-heading">
                  &lt;Button size="sm" color="primary" /&gt;
                </p>
                <Button size="sm" color="primary" />
              </div>
              <div className="example">
                <p className="element-heading">
                  &lt;Button size="md" color="primary" /&gt;
                </p>
                <Button size="md" color="primary" />
              </div>
              <div className="example">
                <p className="element-heading">
                  &lt;Button size="lg" color="primary" /&gt;
                </p>
                <Button size="lg" color="primary" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="default" /&gt;
                  </p>
                  <Button color="default" />
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button color="default" className="hover" />
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="primary" /&gt;
                  </p>
                  <Button color="primary" />
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button color="primary" className="hover" />
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="secondary" /&gt;
                  </p>
                  <Button color="secondary">Secondary</Button>
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button color="secondary" className="hover">
                    Secondary
                  </Button>
                </div>
              </div>
              <div className="column">
                <div className="example">
                  <p className="element-heading">
                    &lt;Button color="danger" /&gt;
                  </p>
                  <Button color="danger">Danger</Button>
                </div>
                <div className="example">
                  <p className="element-heading">&amp;:hover, &amp;:focus</p>
                  <Button color="danger" className="hover">
                    Danger
                  </Button>
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
