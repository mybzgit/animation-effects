import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} />
      <button
        className='preview-button'
        onClick={() => {
          window.open(`${window.location.href}preview`)
        }}
      >
        Preview
      </button>
    </header>
  )
}

export default Header
