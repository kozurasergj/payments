import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'

const Layout = ({ children }) => (
  <div className='flex flex-col justify-between items-center h-screen'>
    <Header className='' />
    <Navbar/>
    <main className=''>{children}</main>
    <Footer className='' />
  </div>
)
export default Layout
