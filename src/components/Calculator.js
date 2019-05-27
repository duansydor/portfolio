import React from 'react';
import CalcStyle from './CalcStyle.js';
import{ connect} from 'react-redux';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.numberTyping = this.numberTyping.bind(this);
        
    }
    
    numberTyping(event){
        event = event.target.value;
        console.log(event)
    }
    render(){
        
        let { withCss, withJs } = this.props;
        
        return(
            <div className='container'>
                <CalcStyle/>
                <center>
                <br/>
                <br/>
                <div className={`calculator ${withCss}`}>
                    <h1 className={`calcTitle ${withCss}`}>{withCss?"Com Estilo":"Sem Estilo"}</h1>
                    <div className={`input ${withCss}`}>
                        <input placeholder="Calculadora" type="text" />
                    </div>
                    <div className={`btncontainer ${withCss}`}>
                        <div>
                            <input type="button" onClick={(e) => { this.numberTyping(e) }} value="7"/>
                            <input type="button" onClick={(e) => { this.numberTyping(e) }} value="8"/>
                            <input type="button" onClick={() => { this.numberTyping(9) }} value="8"/>
                            <input type="button" onClick={() => { this.numberTyping(e) }} value="*"/>
                        </div>
    
                        <div >
                            <input type="button" value="4"/>
                            <input type="button" value="5"/>
                            <input type="button" value="6"/>
                            <input type="button" value="/"/>
    
                        </div>
    
                        <div>
                            <input type="button" value="1"/>
                            <input type="button" value="2"/>
                            <input type="button" value="3"/>
                            <input type="button" value="-"/>
                        </div>
    
                        <div>
                            <input type="button" value="0"/>
                            <input type="button" value=","/>
                            <input type="button" value="="/>
                            <input type="button" value="+"/>
                        </div>
                    </div>
                    </div>
                </center>
            </div>
        );
    }
    
}
const mapStateToProps = store => ({
	withCss:store.calcState.withCss,
	withCss:store.calcState.withJs
});
export default connect(mapStateToProps)(Calculator);