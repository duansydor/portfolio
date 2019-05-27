import React from "react";
import {Store} from "../store/";
import {changeCss} from "../actions/";
import{ connect} from 'react-redux';

class CalcStyle extends React.Component{
    constructor(props){
        super(props);
        this.changeCSS = this.changeCSS.bind(this);
    }
    changeCSS(css){
        css = !css;
        Store.dispatch(changeCss(css));

    }
    render(props){
        let { withCss } = this.props;
        return(
            <div className="container">
                <div>
                    <input type="checkbox" id="htmlCss" defaultChecked={withCss} onChange={()=>this.changeCSS(withCss)} />HTML + CSS
                    <input type="checkbox" id="htmlJs"/>HTML + CSS + JavaScript
                </div>
                {withCss?'aba':'a'}
            </div>
        );
    }  
}
const mapStateToProps = store => ({
	withCss:store.calcState.withCss
});
export default connect(mapStateToProps)(CalcStyle);