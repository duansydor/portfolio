import React from 'react';
import CalcStyle from './CalcStyle.js';
import{ connect} from 'react-redux';

function Calculator(props){
    let styleHtml = {

    }
    let styleCss={

    }
    let { withCss } = props;
    return(
        <div className='container'>
            <center>
            <CalcStyle/>
            <br/>
            <br/>
            <div className={`calculator ${withCss}`}>
                <h1 className={`calcTitle ${withCss}`}>{withCss?"Com Estilo":"Sem Estilo"}</h1>
                <div className={`input ${withCss}`}>
                    <input placeholder="Calculadora" type="text"/>
                </div>
                <div className={`btncontainer ${withCss}`}>
                    <div>
                        <input type="button" value="7"/>
                        <input type="button" value="8"/>
                        <input type="button" value="9"/>
                        <input type="button" value="*"/>
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
const mapStateToProps = store => ({
	withCss:store.calcState.withCss
});
export default connect(mapStateToProps)(Calculator);