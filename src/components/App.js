import Header from './Header';
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {pageHeader: 'Naming Contest'};
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
            </div>
        );
    }
}


export default App;