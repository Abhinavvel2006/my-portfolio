import { navigation, profile } from '../data/portfolio'
import { SocialLinks } from './ui'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a className="brand" href="#/home">
              <span className="brand-mark">
                <Icon name="code" size={20} />
              </span>
              {profile.name}
              <span className="brand-dot">.</span>
            </a>
            <p>Thoughtful code. Endless curiosity.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.slice(1).map((item) => (
              <a key={item.id} href={`#/${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p>
            Built with React <span aria-hidden="true">↗</span> Always learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
