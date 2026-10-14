import { profile, publicAsset } from '../data/portfolio'

function BrowserFrame({ name, children }) {
  return (
    <div className="preview-browser">
      <div className="preview-browser-bar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{name}</span>
        <span>↗</span>
      </div>
      {children}
    </div>
  )
}

export default function ProjectPreview({ kind, title }) {
  return (
    <div
      className={`project-preview preview-${kind}`}
      role="img"
      aria-label={`Interface illustration for ${title}`}
    >
      <div className="preview-stage" aria-hidden="true">
        {kind === 'enrollment' && (
          <BrowserFrame name="Enrollment / Dashboard">
            <div className="enrollment-illustration">
              <aside>
                <span className="mini-logo">s.</span>
                <i />
                <i />
                <i />
                <i />
                <div className="mini-avatar" />
              </aside>
              <div className="mini-dashboard">
                <span className="mini-kicker">THE NEXT CHAPTER</span>
                <strong>Welcome to your future.</strong>
                <div className="mini-metrics">
                  <div>
                    <span>Applications</span>
                    <i />
                  </div>
                  <div>
                    <span>Enrollment</span>
                    <i />
                  </div>
                  <div>
                    <span>Students</span>
                    <i />
                  </div>
                </div>
                <p>
                  Recent applications <span>View all ↗</span>
                </p>
                <div className="mini-rows">
                  {[1, 2, 3].map((i) => (
                    <div key={i}>
                      <b />
                      <i />
                      <em>In review</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BrowserFrame>
        )}
        {kind === 'commerce' && (
          <BrowserFrame name="WBUY / The everyday edit">
            <div className="commerce-illustration">
              <div className="mini-shop-nav">
                <strong>wb.</strong>
                <span>Shop · Collections · About</span>
                <b>Bag (0)</b>
              </div>
              <div className="mini-shop-heading">
                <span>LESS, BUT BETTER.</span>
                <strong>Made for your everyday.</strong>
              </div>
              <div className="mini-products">
                <div>
                  <i className="mini-product-bag" />
                  <span>Everyday essentials</span>
                </div>
                <div>
                  <i className="mini-product-lamp" />
                  <span>Considered objects</span>
                </div>
                <div>
                  <i className="mini-product-vase" />
                  <span>A little something</span>
                </div>
              </div>
            </div>
          </BrowserFrame>
        )}
        {kind === 'mobile' && (
          <div className="mobile-illustration">
            <div className="phone-back">
              <div className="food-plate">
                <i />
                <i />
                <i />
              </div>
              <strong>
                Fresh. Fast.
                <br />
                Full of flavor.
              </strong>
            </div>
            <div className="phone-front">
              <span className="phone-notch" />
              <div className="phone-top">
                <strong>
                  QuickEats<span>●</span>
                </strong>
                <b>☰</b>
              </div>
              <p>
                What sounds
                <br />
                <strong>good today?</strong>
              </p>
              <div className="food-categories">
                <span>All</span>
                <span>Bowls</span>
                <span>Pizza</span>
              </div>
              <div className="phone-food">
                <div className="food-plate">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="phone-food-title">
                <strong>Your next favorite</strong>
                <span>Freshly made, just for you</span>
              </div>
              <div className="phone-order">
                Explore the menu <b>↗</b>
              </div>
            </div>
          </div>
        )}
        {kind === 'construction' && (
          <BrowserFrame name="BuildSmart Constructions">
            <div className="construction-illustration">
              <span className="mini-construction-logo">B / BUILDSMART</span>
              <div>
                <span>SPACES WITH PURPOSE</span>
                <strong>
                  Build better.
                  <br />
                  Build smart.
                </strong>
                <b>Discover our work ↗</b>
              </div>
              <div className="mini-building">
                <i />
                <i />
                <i />
              </div>
            </div>
          </BrowserFrame>
        )}
        {kind === 'portfolio' && (
          <BrowserFrame name="Abhinav / Portfolio">
            <div className="portfolio-illustration">
              <span>
                ABHINAV. <i>ABOUT / WORK / CONTACT</i>
              </span>
              <div>
                <p>DEVELOPER & CURIOUS BUILDER</p>
                <strong>
                  Building ideas.
                  <br />
                  <em>Crafting experiences.</em>
                </strong>
                <b>Explore my work ↗</b>
              </div>
              <img src={publicAsset(profile.image)} alt="" loading="lazy" />
            </div>
          </BrowserFrame>
        )}
        {kind === 'mern' && (
          <BrowserFrame name="MERN / In development">
            <div className="mern-illustration">
              <div className="mern-stack">
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>N</span>
              </div>
              <span>ONE LANGUAGE. EVERY LAYER.</span>
              <strong>
                From interface
                <br />
                to database.
              </strong>
              <div className="mini-code">
                <span>app.get</span>('/products', async () =&gt; &#123;
                <br />
                &nbsp; return <span>await</span> Product.find();
                <br />
                &#125;);
              </div>
            </div>
          </BrowserFrame>
        )}
      </div>
      <span className="preview-label">Interface illustration</span>
    </div>
  )
}
