import React from 'react';
import styled from 'styled-components';
import FadeInUp from '../../animations/FadeInUp';


const Container = styled.div`
	margin-left: 5%;
	margin-right: 5%
	width: auto
	margin-top: 3vh
	background-color: white;
	border-radius: 0.5em;
	padding: 1% 3%;	
`;

const Number = styled.h2`
	display: inline;
	font-size: 4em;
	color: #545454;
	height:10;
	margin:0;
`;

const Description = styled.div`
	display: inline;
	font-size: 2em;
	font-family: helvetica, arial, sans-serif;
	margin-left: 20px

	&:hover .hidden {
		visibility: visible;
	}
`;

const HiddenSpan = styled.span`
	visibility: hidden;
`


const Step = (props) => {
  return (
  	<FadeInUp duration={props.duration} delay={props.delay}>
	    <Container className="shadow-1 flex items-center">
	    	<Number>{props.number}</Number>
	    	<Description>{props.description}
	    		<HiddenSpan className="hidden"><a target="_blank" href={"http://www.google.com/search?q="+props.description.replace(" ", "+")}>Click to google</a></HiddenSpan>
	    	</Description>
	    </Container>
    </FadeInUp>
  )
}

export default Step;