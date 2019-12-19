const initialState = {
	count: 0
};

//Note that reducers ALWAYS have to be pure functions!!! 
function rootReducer(state=initialState, action){
	let newState = {...state};// equals: newState = Object.assign({}, state) to make a new copy of state

	switch(action.type){
		case "INCREMENT":
			newState.count += 1;
			return newState; 
		case "DECREMENT":
			newState.count -= 1;
			return newState; 
		default:
			return state;
	}
}

const store = Redux.createStore(rootReducer);

$(document).ready(function(){
	//load the counter's initial html text content
	let currState = store.getState();// i.e. {count: 0}
	$("#counter").text(currState.count);

	$("#increment").on("click", function(){
		//store dispatches an action to increment the count
		store.dispatch({
			type: "INCREMENT"
		});
		//obtain the updated state in the store and use it to set DOM element
		let currState = store.getState();
		$("#counter").text(currState.count);
	});
	$("#decrement").on("click", function(){
		//store dispatches an action to decrement the count
		store.dispatch({
			type: "DECREMENT"
		});
		//obtain the updated state in the store and use it to set DOM element
		let currState = store.getState();
		$("#counter").text(currState.count); 
	});
});

