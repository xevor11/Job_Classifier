import React from 'react';
// // import Home from "./Main";
// import Stuff from './Stuff';
// import Contact from './Contact';
// import { HashRouter } from 'react-router-dom';
// import Navigation from '../navigation/navigation.component';
import './home.styles.scss';
const Home = () => {
	return (
		//<HashRouter>
			<div>
				{/* <h1>Simple SPA</h1> */}
				{/* <Navigation /> */}
				{/* <ul className='header'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/stuff'>Stuff</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul> */}
				{/* <div className='content'>
					<div className='content'>
						<Route exact path='/' component={Home} />
						<Route path='/stuff' component={Stuff} />
						<Route path='/contact' component={Contact} />
					</div>
				</div> */}

				<div>
					<h2 className='title'>HELLO</h2>
					<h4 className='home-title'>
						We help you land your dream offer!
                </h4>
                <p className='home-content'>
                    Be the first one to apply for any job you like.
                    <br />
                    <br/>
                    Join us and start your recruiting journey.
                    <br />
                    We help to make your recruiting 100 times easier.

                </p>
                <br />

                <div className='intro'>
                    <p style={{ textAlign: "center" }}>WHO IS JOB HUNTER?</p>

                    <p style={{ textAlign: "left" }}>
                        JobHunter is an automated job notification system that keeps job seekers updated with the latest job postings on a company's website. The system utilizes push notifications, email or text message notifications to notify users about new job postings. JobHunter aims to solve the problem of missing out on job opportunities due to late application or not being informed on time.
                    </p>

                </div>

				</div>
			</div>
		//</HashRouter>
	);
};

export default Home;

// import React, { Component } from "react";

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <h2>HELLO</h2>
//         <p>Cras facilisis urna ornare ex volutpat, et
//         convallis erat elementum. Ut aliquam, ipsum vitae
//         gravida suscipit, metus dui bibendum est, eget rhoncus nibh
//         metus nec massa. Maecenas hendrerit laoreet augue
//         nec molestie. Cum sociis natoque penatibus et magnis
//         dis parturient montes, nascetur ridiculus mus.</p>

//         <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
//       </div>
//     );
//   }
// }

// export default Home;
