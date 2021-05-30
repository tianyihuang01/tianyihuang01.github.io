import React from 'react';
import styled from 'styled-components';

const CurrentPosition = styled.div`
	display: flex;
	background-image: url(https://i.imgur.com/GhQZhaO.jpg);
	background-size: cover;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	color: #fff;
	position: relative;
`;

const Current = () => (
  <CurrentPosition>
	Melbourne, 9 degree
  </CurrentPosition>
);

export default Current;
