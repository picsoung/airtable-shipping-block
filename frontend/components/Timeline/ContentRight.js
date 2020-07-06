/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BodyComponent = styled.div`
	font-size: 0.9em;
	padding-bottom: 30px;
	padding-left: 15px;
    position: relative;
    max-width: 400px;
	@media (min-width: 1200px) {
		font-size: 1em;
	}
	&::before {
		content: '';
		background-color: #ccc;
		height: 100%;
		left: -3px;
		min-height: 95%;
		position: absolute;
		top: 10px;
		width: 2px;
	}
`;

const BodyComponentTitle = styled.p`
	color: #002a3a;
	font-weight: bold;
	margin-bottom: 10px;
	font-size: 18px;
	margin-top: 0;
	text-align: left;
`;

const ContentRight = (props) => {
	const { title, children } = props;

	return (
		<BodyComponent className='body-component'>
			<BodyComponentTitle className='title-body-component'>
				{title}
			</BodyComponentTitle>
			{children}
		</BodyComponent>
	);
};

export default ContentRight;