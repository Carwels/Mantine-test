import '../Styles/navbar.css'
import logo from '../images/wavic-logo-beta-black.svg'
import logout from '../images/logout.svg'
import support from '../images/support.svg'
import profilePic from '../images/profilePic.svg'

function Navbar() {
  return (
      <div className='global-wrapper'>
        <div className='header'>
          <img src={logo} alt="logo-wavic" className='wavic-logo'/>
          <nav className="navigation">

            <button className="btn-group">
              <div className='circle-icon-profilePic'>
                <img className='profile-btn' src={profilePic} alt="users-icon" />
              </div>
              <span className='span-text text-color'>Profile</span>
            </button>

            <button className='btn-group'>
              <img className='btn-group-padding' src={support} alt="support-icon"/>
              <span className='span-text text-color'>Support</span>
            </button>

            <button className='btn-group'>
              <img className='btn-group-padding' src={logout} alt="logout-icon"/>
              <span className='span-text logout'>Logout</span>
            </button>

          </nav>
        </div>
      </div>
  );
}

export default Navbar;
