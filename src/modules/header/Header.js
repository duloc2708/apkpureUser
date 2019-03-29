
import { getDataBySearch } from 'modules/search/actions/'
import Link from 'next/link'
import LazyImage from 'common/component/LazyImage'
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
  _loadHome(){
    window.location.reload()
  }
  render() {
    return (
      <header id="header">
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
                      <input type="text"
                        className="searchTerm" placeholder="Seach?"
                        value={this.state.search}
                        onChange={(e) => this._handleInput(e)}
                        type="text"
                        ref="search"
                        id="search"
                      />
                      <button id="btnSearch" onClick={() => this._onSearch()} className="searchButton">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </li>
                <li><a onClick={()=>this._loadHome()}>Home</a>
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
  }
}
export default Header

