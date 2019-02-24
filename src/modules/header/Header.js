import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}
const Header = () => (
  <header id="header">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="/"><img src={`${Config.API_LOCAL_IMAGE}img/logo-d.png`} alt="" title="" /></a>
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
            <li><a href="/">Blog</a>
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
