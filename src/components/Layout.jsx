import Footer from './Footer.jsx'
import Header from './Header.jsx'

const Layout = ({ children }) => (
  <div className='flex flex-col justify-between items-center h-screen'>
    <Header className='' />
    <main className=''>{children}</main>
    <Footer className='' />
  </div>
)
export default Layout
