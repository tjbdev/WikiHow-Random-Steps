import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title/Title';
import StepList from '../components/StepList/StepList';
import Footer from '../components/Footer/Footer';

import nounsObj from './nouns.js';
import verbsObj from './verbs.js';

const nouns = nounsObj.nouns;
const verbs = verbsObj.verbs;
const connectors = ["for the","for your", "an", "your new", "a new", "the", "at the","your", "your mother's", "your father's", "your teacher's", "your crush's", "your brother's", "your sister's", "your son's", "your daughter's", "your boss's", "your dog's", "your cat's", "your", "your", "your", "your", "your", "your", "the", "the", "the", "the", "the", "the", "the"];

const unirest = require("unirest");

const Container = styled.div`
	display:flex;
	flex-direction: column;
	min-height: 100vh;
	position:relative;
`;

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			nounIndex: 0,
			verbIndex: 0,
			connectorIndex: 0,
			steps: {1: "None"},
		}
		this.newVerbNoun = this.newVerbNoun.bind(this);
		this.fetchSteps = this.fetchSteps.bind(this);
		this.updateInfo = this.updateInfo.bind(this);
	}

	fetchSteps(){
		const req = unirest("GET", "https://hargrimm-wikihow-v1.p.rapidapi.com/steps");
		const count = Math.floor(Math.random()*8 +1);
		req.query({
			"count": count
		});

		req.headers({
			"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
			"x-rapidapi-key": "2eee6e920amsh740fbb2e0b2b14fp1a51d8jsn18057bec2130"
		});

		req.end((res)=>{
			this.setState({steps: res.body});
		});
	}

	newVerbNoun(){
		this.setState({nounIndex: Math.floor(Math.random()*nouns.length)});
		this.setState({verbIndex: Math.floor(Math.random()*verbs.length)});
		this.setState({connectorIndex: Math.floor(Math.random()*connectors.length)});
	}

	updateInfo(event){
		this.setState({steps: {}});
		this.newVerbNoun();
		this.fetchSteps();
	}

	componentWillMount(){
		this.updateInfo();
	}


	render() {
		const { nounIndex, verbIndex, connectorIndex, steps} = this.state;
		return (
			<Container>
				<div style={{marginBottom: "5em"}}>
					<Title updateInfo={this.updateInfo} verb={verbs[verbIndex]} connector={connectors[connectorIndex]} noun={nouns[nounIndex]}/>
					<StepList steps={steps} duration={0.3} delay={0.8}/>
				</div>
				<div>
					<Footer className="self-end"/>
				</div>
			</Container>
		);
	}
}
