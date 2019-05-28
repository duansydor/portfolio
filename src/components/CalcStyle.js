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
                <div className="propertiesCont">
                    <div className="changeProperties">
                        <div className="input">
                            <input type="checkbox" id="htmlCss" defaultChecked={withCss} onChange={()=>this.changeCSS(withCss)} />
                            <label htmlFor="htmlCss">
                                HTML + CSS
                            </label>
                        </div>
                        <div>

                        </div>
                        <div className="input">
                            <input type="checkbox" id="htmlJs"/>
                            <label htmlFor="htmlJs"> 
                                HTML + CSS + JavaScript
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}
const mapStateToProps = store => ({
	withCss:store.calcState.withCss
});
export default connect(mapStateToProps)(CalcStyle);