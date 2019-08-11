import styled, {keyframes} from 'styled-components';

const growEntranceAnimation = keyframes`
	from{transform: scale(0,0);}
	to{transform: scale(1,1);}
`;

const Grow = styled.span`
	animation: ${growEntranceAnimation} ${props=>props.duration}s;
	animation-delay: ${props => props.delay ? props.delay : 0}s;
	display: inline-block;
`;

export default Grow;