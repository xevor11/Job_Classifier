import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as JobLogo } from '../../assets/job-search-icon.svg';

import './NavBar.styles.scss';

const NavBar = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/' >
					<JobLogo className='logo' />
				</Link>
				<h1 className='job-hunter-title' >
					JOB HUNTER
				</h1>

				<div className='nav-links-container'>
					{/* <a href='/' className='site-name'>
						Job Hunter
					</a> */}
					<Link className='nav-link' to='/'>
						HOME
					</Link>
					<Link className='nav-link' to='/about'>
						ABOUT
					</Link>

					<Link className='nav-link' to='/contact'>
						CONTACT
					</Link>
					
					<Link className='nav-link' to='/auth'>
						SIGN IN/SIGN UP
					</Link>
					<Link className='nav-link' to='/myprofile'>
						MY PROFILE
					</Link>
				</div>

				{/* {currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />} */}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavBar;

// function NavBar() {
// 	return (
// 		<header>
// 			<NavigationContainer>
// 				<LogoContainer>{/* <JobLogo className='logo' /> */}</LogoContainer>

// 				<NavLinks>
// 					<NavLink to='/'>Home</NavLink>
// 					<NavLink to='/stuff'>Stuff</NavLink>
// 					<NavLink to='/contact'>Contact</NavLink>
// 					<NavLink to='/auth'>SIGN IN</NavLink>
// 					<NavLink to='/auth'>SIGN UP</NavLink>
// 				</NavLinks>
// 			</NavigationContainer>
// 		</header>
// 	);
// }

// export default NavBar;
