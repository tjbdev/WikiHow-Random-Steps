import React from 'react';
import FadeIn from '../../animations/FadeInDown';

const howToStyle = {
	fontFamily: 'verdana',
	backgroundColor: '#93B874',
	color: '#475347'
}

const vnStyle = {
	backgroundColor: '#475347',
	color: 'white',
	fontSize: '2em'
}

export default class Title extends React.Component {
	render() {
		return (
			<div style={{marginBottom: "3%"}}>
				<div className="flex justify-center" style={howToStyle}>
					<h1 className="di mt0 mb0">How to...</h1>
				</div>
				<div className=" shadow-3 flex justify-center content-center tc" style={vnStyle}>
					<FadeIn duration={0.5}>
						<h1 className="mt0 mb0 ttc pb3">{this.props.verb} {this.props.connector} {this.props.noun} </h1>
					</FadeIn>
				</div>
			</div>
		);
	}
}
