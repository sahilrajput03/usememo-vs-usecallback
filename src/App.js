import "./styles.css";
import {useState, useCallback as useFunction, useMemo} from "react";

export default function App() {
	const [state, setState] = useState(0);
	const value = useMemo(() => {
		log("computing calcualtions in useMemo...");
		// some coputation here..
		return "Value";
	}, []);

	const func = useFunction(
		(param) => {
			log("computing calcualtions in useFunction...");
			return "Value" + state + param;
		},
		[state]
	);

	const IncButton = (
		<button onClick={() => setState(state + 1)}>Increment</button>
	);
	const DecButton = (
		<button onClick={() => setState(state - 1)}>Decrement</button>
	);
	const execFuncButton = (
		<button onClick={() => log(func("iii"))}>Exec Func</button>
	);

	return (
		<div className="App">
			Hello, cool. <br />
			{state} <br />
			{IncButton}
			{DecButton}
			{execFuncButton}
		</div>
	);
}

var log = console.log;
