import React from "react";
import {Store} from "../store/";
import {changeCss, changeJs} from "../actions/";
import{ connect} from 'react-redux';

class CalcStyle extends React.Component{
    constructor(props){
        super(props);
        this.changeCSS = this.changeCSS.bind(this);
        this.changeJS = this.changeJS.bind(this);
    }
    changeCSS(css){
        css = !css;
        Store.dispatch(changeCss(css));

    }
    changeJS(js){
        js = !js;
        Store.dispatch(changeJs(js));
    }
    render(props){
        let { withCss, withJs } = this.props;
        return(
            <div>
                <div className="propertiesCont">
                    <div className="changeProperties">
                        <br/>
                        <div className="input">
                            <input type="checkbox" id="htmlCss" defaultChecked={withCss} onChange={()=>this.changeCSS(withCss)} />
                            <label htmlFor="htmlCss">
                                CSS
                            </label>
                            
                        </div>
                        <div>

                        </div>
                        
                        <br/>
                        <div className="input">
                            <input type="checkbox" id="htmlJs" defaultChecked={withJs} onChange={()=>this.changeJS(withJs)}/>
                            <label htmlFor="htmlJs"> 
                                JavaScript
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}
const mapStateToProps = store => ({
	withCss:store.calcState.withCss,
	withJs:store.calcState.withJs
});
export default connect(mapStateToProps)(CalcStyle);