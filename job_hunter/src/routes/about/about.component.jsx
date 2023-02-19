import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.styles.scss';

class About extends Component {
	render() {
		return (
            <div className='about-page'>
                <div className='space1'></div>
				<h1 className='title'>JOB HUNTER</h1>

                <p className='p1 f1'>
                    Have you have any exprience of being rejected from a company just becuase you applied late?
                    Job Hunter is there to make sure you are the first one to apply to all the jobs you are intereted in.
                    <br/>
					JobHunter is an automated job notification system that keeps job
					seekers updated with the latest job postings on a company's website.
					The system utilizes push notifications, email or text message
					notifications to notify users about new job postings. JobHunter aims
					to solve the problem of missing out on job opportunities due to late
					application or not being informed on time.
				</p>
				<h4 className='p1 f2'>
					JobHunter aims to make the job search process easier for job seekers
					by notifying them about new job postings in a timely manner and
					assisting them in classifying job postings into relevant industry
					categories.
                </h4>
                <br/>
                <hr />
                <br/>
				<p className='p1 f3'>
					In addition to the job notification system, JobHunter also provides a
					machine learning-based text classification system that classifies job
					postings into one of four industry categories. The system uses
					supervised machine learning methods to assign new job titles to one of
					four industry categories. The industry classification problem is a
					multi-class text classification problem, and the solution includes
					data cleaning, text preprocessing, dealing with data imbalance and
					building a machine learning model using LinearSVC, Multinomial
					NaiveBayes, and Logistic Regression.
				</p>
				<p className='p1 f3'>
					The final machine learning model, LinearSVC, is then deployed using a
					Flask API that provides a RESTful API service to users. The model is
					not recompiled or trained with each request but rather predicts on the
					given data in the request.
				</p>

				<br />

				<h2 className='got-question'>GOT QUESTIONS?</h2>
				<p className='got-question'>
					Go to &nbsp;{' '}
					<Link className='nav-link' to='/contact'>
						CONTACT
					</Link>
					&nbsp; and talk with us!
                </p>
                <div className='space'></div>
			</div>
		);
	}
}

export default About;
