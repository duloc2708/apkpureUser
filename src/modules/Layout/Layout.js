import Header from 'modules/header/Header.js'
import FooterFormView from 'modules/footer/FooterFormView.js'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <FooterFormView/>
  </div>
)

export default Layout
