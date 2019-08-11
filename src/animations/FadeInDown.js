import styled, {keyframes} from 'styled-components';

const fadeInAnimation = keyframes`
	0%{
		opacity: 0;
		transform: translate(0, 30%);
	}
	100% {
		opacity: 1;
		transform: translate(0,0);
	}
`;

const FadeInDown = styled.div`
	display: inline-block;
	animation: ${fadeInAnimation} ${props => props.duration}s ease-in;
	animation-delay: ${props => props.delay ? props.delay : 0}s;
`

export default FadeInDown;