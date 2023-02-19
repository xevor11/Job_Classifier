import React, { Fragment } from 'react';
import './myprofile.styles.scss';
import { useState } from 'react';

class MyProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'coconut' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<Fragment>
				<div className='myprofile-website'>
					<div className='forms'>
						DO YOU WANT TO ADD ANY OTHER JOBS NOTIFICATION?
						<form action='/action_page.php'>
							<label>
								Job Type:&nbsp;
								<select value={this.state.value} onChange={this.handleChange}>
									<option value='Full Time'>Full Time</option>
									<option value='Part Time'>Part Time</option>
									<option value='Internship'>Internship</option>
									<option value='Co-op'>Co-op</option>
								</select>
							</label>

							{/* <input type='submit' value='Submit' /> */}
							{/* </form> */}
							{/* <form > */}
							<label for='job-title'>
								Job Title:&nbsp;
								<input
									type='text'
									id='job-title'
									name='job-title'
									placeholder='Job Title..'
								/>
							</label>
							<label for='company'>
								Company
								<input
									type='text'
									id='company'
									name='company'
									placeholder='Company name..'
								/>
							</label>
						</form>
						{/* <label>
							Job Title:&nbsp;
							<input />
						</label> */}
						{/* <input type='submit' value='Submit' /> */}
						{/* </form> */}
						{/* <form >
						<label>
							Company:&nbsp;
							<input />
						</label>
                    </form> */}
						{/* <div className='space'></div> */}
						{/* </input></input> <input type="submit" value="Submit"> */}
						<button className='btn' onSubmit={this.handleSubmit}>
							Add
						</button>
					</div>
					<div className='s1'></div>
					<div className='my-job-list'>
						<p className='job-list'>YOUR CURRENT JOB SUBSCRIPTION:</p>
						<ul className='job-list'>
                            <li>Google: Software Engineer</li>
                            <li>Apple: Software Engineer</li>
                            <li>Amazon: Software Engineer</li>
                            <li>Meta: Software Engineer</li>
                            <li>Tesla: Software Engineer</li>
                            <li>...</li>
                        </ul>
                        <p className='explain'>You will receive notification as soon as a new job you choose is posted in the company's website </p>
					</div>
				</div>
			</Fragment>
		);
	}
}

// const MyProfile = () => {

//     handleSubmit = ()=> {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
// 	return (
// 		<div className='myprofile-website'>
// 			<div>
// 				<form onSubmit={this.handleSubmit}>
// 					<label>
// 						Add any type of job positions you are interested in:
// 						<select value={this.state.value} onChange={this.handleChange}>
// 							<option value='grapefruit'>Grapefruit</option>
// 							<option value='lime'>Lime</option>
// 							<option value='coconut'>Coconut</option>
// 							<option value='mango'>Mango</option>
// 						</select>
// 					</label>
// 					<input type='submit' value='Submit' />
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

export default MyProfile;
