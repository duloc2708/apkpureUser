
import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  _handleInput(e) {
    this.setState({ search: e.target.value })

  }
  _onSearch() {
    window.location.href = "/search?q=" + this.state.search;
  }
  componentDidMount() {
    let that = this
    $(document).keypress(function (event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13') {
        if ($('#search').is(':focus')) {
          that._onSearch()
        }
      }

    });
  }
  _loadHome() {
    window.location.reload()
  }
  render() {
    console.log('Header');
    
    return (
      <header id="header" data-aos="zoom-out">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="/"><img src={`${Config.API_DOMAIN_CURRENT}/img/logo-d2-min.png`} alt="logo" title="logo" /></a>

            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu align-items-center d-flex">
                <li>
                  <div className="wrap">
                    <div className="search">
                      <input
                        type="text"
                        className="searchTerm"
                        placeholder="Seach?"
                      />
                      <button
                        href="https://apksafety.com/search?q="
                        type="submit"
                        className="searchButton"
                      >
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Collection</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            {/* #nav-menu-container */}
          </div>
        </div>
      </header>


    )
  }
}
export default Header

