import React from 'react';
import styled, { keyframes } from 'styled-components';


const fadeInAndOut = keyframes`
	0% {
		transform: translate(0, 60%) rotate(5deg);
		opacity: 0;
	}
	40%,60% {
		transform: translate(0,0);
		opacity: 1;
	}
	100% {
		transform: translate(0, -60%) rotate(-5deg);
		opacity: 0;
	}
`;

let duration = 4;

const Animation = styled.div`
	display: inline-block;
	animation: ${fadeInAndOut} ${duration}s infinite;

`;

export default class PeriodicSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			currentKeyword: this.props.keywords[0],
			currentKeywordIndex: 0,
		}
	}

	componentDidMount(){
		setInterval(()=>{
			this.setState({
				currentKeywordIndex: Math.floor(Math.random()*this.props.keywords.length),
				currentKeyword: this.props.keywords[this.state.currentKeywordIndex],
			});
			console.log(this.state.currentKeywordIndex);
		}, this.props.duration*1000);
		duration = this.props.duration;
	}

	render() {
		const {currentKeyword} = this.state;
		return (
			<div style={{display:'inline-block'}}>
				<Animation>
					{currentKeyword}
				</Animation>
			</div>
		);
	}
}

