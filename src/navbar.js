
import React from 'react';
import { Link } from 'react-router-dom';
import LoginAndSignup from './component/loginandsignup';
import InstaMenu from './component/menu';
import UserSearchNavSec from './component/usersearch';
import './css/navbar.css';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isClickedProfile: false
    }
    this.handleClickProfile = this.handleClickProfile.bind(this);
    this.close = this.close.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
  }

  addEventListener() {

    document.addEventListener('click', this.close);
  }


  handleClickProfile() {
    if (this.state.isClickedProfile) {
      this.setState({
        isClickedProfile: false
      })
      document.getElementsByClassName('sub-menu-profile')[0].style.display = 'none';
    } else {
      this.setState({
        isClickedProfile: true
      })
      document.getElementsByClassName('sub-menu-profile')[0].style.display = 'block';
    }

  }

  close() {
    if (this.state.isClickedProfile) {
      this.setState({
        isClickedProfile: false
      })
      document.getElementsByClassName('sub-menu-profile')[0].style.display = 'none';
    }
  }

  componentDidUpdate() {
    //console.log("Update");
  }



  render() {

    return <>
      <nav className="instagram-navbar-menu-container" onClick={this.close}>
        {/* Title Section */}
        <section className="title-section">
          <h1><Link to="/">Vibe-Nep</Link></h1>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <UserSearchNavSec />
        </section>

        {/* Menu Section */}
        {this.props.isAuth ? <InstaMenu close={this.close} handleClickProfile={this.handleClickProfile} /> : <LoginAndSignup />}


      </nav>

    </>
  }
}

// export function MobileCompatibleNavBar(props) {

//   let [isMobileCompitable, setIsMobileCompitable] = React.useState(window.innerWidth <= 600 ? true : false);
//   let [isAuth, setIsAuth] = React.useState(Cookies.get('token') != undefined || Cookies.get('token') != null);
//   let [isClickedProfile, setIsClickedProfile] = React.useState(false);

//   React.useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth <= 600) {
//         console.log("Mobile Compatible");
//         setIsMobileCompitable(true);
//       } else {
//         setIsMobileCompitable(false);
//       }

//     }

//     window.addEventListener('resize', handleResize)
//   }, [])
//   if (!isMobileCompitable) {
//     return <></>
//   }
//  const handleClickProfile=()=> {
//     if (isClickedProfile) {
//      setIsClickedProfile(false)
//       document.getElementsByClassName('sub-menu-profile')[0].style.display = 'none';
//     } else {
//       setIsClickedProfile(true)
//       document.getElementsByClassName('sub-menu-profile')[0].style.display = 'block';
//     }

//   }

//  const close=function() {
//     if (isClickedProfile) {
//      setIsClickedProfile(false)
//       document.getElementsByClassName('sub-menu-profile')[0].style.display = 'none';
//     }
//   }


//   return <>
//     <div className='mobile-compatible-navbar-main-container'>

//       {
//         isAuth ? <MobileViewInstaMenu close={close} handleClickProfile={handleClickProfile} /> : <LoginAndSignup />
//       }


//     </div>
//   </>

// }


export default NavBar;