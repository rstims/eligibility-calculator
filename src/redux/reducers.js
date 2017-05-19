export const APP_INIT = 'APP_INIT';

export const appInitialState = {
	isLoading: true,
    nextSlide: {},
    prevSlide: {},
}

export const appReducer = (state = appInitialState, action) => {
	switch(action.type){
		case APP_INIT:
			return {
				...state,
				isLoading:!action.isLoading,
			};
		default:
			return {...state};
	}
}

export const initApp = (isLoading) => ({
	type: APP_INIT,
	isLoading
});