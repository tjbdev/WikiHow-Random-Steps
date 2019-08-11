import React from 'react';
import Step from '../Step/Step';

const style = {
	marginBottom: "3%"
}

const StepList = ({steps,duration,delay}) => {
	let durationCount = -1;
  return (
    <div style={style}>
    	{
    		//Duration is the time for each step to transition. This will stagger the transitions.
    		Object.entries(steps).map(step =>{
    			durationCount += 1;
    			return(
    				<Step key={durationCount} number={step[0]} description={step[1]} duration={duration} delay={delay+(duration*durationCount)}/>
    			);
    		})
    	}

    </div>
  );
}

export default StepList;