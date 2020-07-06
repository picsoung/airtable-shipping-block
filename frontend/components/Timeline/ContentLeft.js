/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeftComponent = styled.div`
	color: #002a3a;
	font-size: 1em;
	font-weight: 400;
	padding-right: 15px;
	padding-bottom: 10px;
	position: relative;
	text-align: right;
	width: 100px;
	&::after {
		background: #ccc;
		border-radius: 50%;
		content: '';
		height: 6px;
		position: absolute;
		right: -1px;
		top: 5px;
		width: 6px;
	}
`;

const Item = styled.div`
	margin-bottom: 8px;
`;

const ContentLeft = (props) => {
    const { title, children } = props;
	return (
		<LeftComponent className='left-component'>
			{children}
		</LeftComponent>
	);
};

export default ContentLeft;