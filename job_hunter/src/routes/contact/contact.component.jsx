import React, { Component } from 'react';
import './contact.styles.scss';
class Contact extends Component {
	render() {
		return (
			<div>
				<h2 className='contact font'>GOT QUESTIONS?</h2>
				<h4 className='contact font'>
					Fill out the form and we will contact you!
				</h4>
				<br />
				<h5 className='contact'>EMAIL:</h5>
				<input
					className='contact-email'
					id='contact-user-input-email'
					type='email'
					placeholder='email'
				/>
				<br />
				<br />
				<h5 className='contact'>QUESTION:</h5>
				<textarea
					className='contact-question'
					rows='4'
					name='content'
					placeholder='Your questions'></textarea>
			</div>
		);
	}
}

export default Contact;
