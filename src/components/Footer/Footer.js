import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display:flex;
	flex-direction: row;
	background-color: #93B874;
	color: #545454;
	padding: 10px;
	justify-content: center;
	font-weight: 700;
	position:absolute;
	bottom: 0;
	left: 0;
	width: 100%
`;

const Footer = (props) => {
  return (
  	<Container>
  		This site is not giving advice, none of the words above are serious or intended to be acted out, as that may be unsafe, they are specifically for the purpose of reading for humour.
  	</Container>
  )
}

export default Footer;