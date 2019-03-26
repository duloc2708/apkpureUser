import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}
const Header = () => (
  <header id="header">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="/"><img src={`static/img/logo-d.png`} alt="logo" title="logo" /></a>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu align-items-center d-flex">
            <li>
              <div className="wrap">
                <div className="search">
                  <input type="text" className="searchTerm" placeholder="Seach?" />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li><a href="/">Home</a>
            </li>
            <li>
              <Link as={`/blog`} href={`/blog`}><a>Blog</a></Link>
            </li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        {/*  */}
        {/* #nav-menu-container */}
      </div>
    </div>
  </header>
)

export default Header
