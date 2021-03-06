import React from 'react';
import CalcStyle from './CalcStyle.js';
import{ connect} from 'react-redux';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.numberTyping = this.numberTyping.bind(this);
        
        this.state = {
            num1:0,
            operation:'',
            resultado:0
        }
    }
    
    numberTyping(event){
        if(this.props.withJs){
            var keyVal = event.target.value;
            let op = ["+","-","/","*","=","Apagar"];
            var input = document.getElementById('inputVal');

            let {num1, operation} = this.state;

            function isInArray(value, array) {
                return array.indexOf(value) > -1;
            }

            function showResult(op,num1,num2){
                switch (op){
                    case '+':
                        return (parseInt(num1) + parseInt(input.value));
                    case '-':
                        return (parseInt(num1) - parseInt(input.value));
                    case '*':
                        return (parseInt(num1) * parseInt(input.value));
                    case '/':
                        return (parseInt(num1) / parseInt(input.value));
                    default:
                    break;
                }
            }


            if(!isInArray(keyVal,op)){
                input.value= input.value + keyVal;
            }
            if(keyVal === "Apagar"){
                input.value="";
            }
            switch (keyVal) {
                case "+":
                    this.setState({operation:'+',num1:parseInt(input.value)})
                    input.value="";   
                break;
                case "-":
                    this.setState({operation:'-',num1:parseInt(input.value)})
                    input.value=""; 
                break;
                case "/":
                    this.setState({operation:'/',num1:parseInt(input.value)})
                    input.value=""; 
                break;
                case "*":
                    this.setState({operation:'*',num1:parseInt(input.value)})
                    input.value=""; 
                break;
                case "=":
                    this.setState({resultado:showResult(operation,num1,input.value)});
                    input.value = "";
                    this.setState({num1:0});
                break;
                default:
                    return
            }
        }
        
    }
    render(){
        
        let { withCss, withJs } = this.props;
        
        return(
            <div className="calcCont">
                <CalcStyle/>
                    
                    <br/>
                    <br/>
                    <div className={`calculator ${withCss}`}>
                        <center>
                            <h2>Calculadora</h2>
                        </center>
                        <div className={`input ${withCss}`}>
                            <input id="inputVal" placeholder="Digite um número" type="text" />
                        </div>
                        <h3>Resultado: {this.state.resultado}</h3>

                        <div className={`btncontainer ${withCss}`}>
                            <div className="delete">
                                <input  type="reset" onClick={(e) => { this.numberTyping(e) }} value="Apagar"></input>
                            </div>
                            <div>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="7"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="8"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="9"/>
                                <input className="operation" type="button" onClick={(e) => { this.numberTyping(e) }} value="X"/>
                            </div>
        
                            <div >
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="4"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="5"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="6"/>
                                <input className="operation" type="button" onClick={(e) => { this.numberTyping(e) }} value="/"/>
        
                            </div>
        
                            <div>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="1"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="2"/>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="3"/>
                                <input className="operation" type="button" onClick={(e) => { this.numberTyping(e) }} value="-"/>
                            </div>
        
                            <div>
                                <input type="button" onClick={(e) => { this.numberTyping(e) }} value="0"/>
                                <input className="operation" type="button" onClick={(e) => { this.numberTyping(e) }} value="="/>
                                <input className="operation" type="submit" onClick={(e) => { this.numberTyping(e) }} value="+"/>
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
export default connect(mapStateToProps)(Calculator);