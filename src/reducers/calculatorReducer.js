const initialState = {
    withCss:false,
    withJs:false,
}
export const calculatorReducer = (state = initialState,action) => {
    switch(action.type){
        case "CHANGE_CSS":
            return{
                ...state, 
                withCss:action.withCss              
            }
        case "CHANGE_JS":
            return{
                ...state,
                withJs:action.withJs,
            }
        default:
            return state;
    }
}