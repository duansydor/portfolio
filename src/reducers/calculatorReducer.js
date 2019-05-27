const initialState = {
    withCss:false,
    withJS:false,
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
                withJS:true,
            }
        default:
            return state;
    }
}