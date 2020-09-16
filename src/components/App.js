import Header from "./Header";
import React from "react";
import ContestList from './ContestList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming Contest",
      contests: this.props.initialContests,
    };
  }
  componentDidMount() {
    // ajax ...
    // axios
    //   .get("/api/contests")
    //   .then((resp) => {
    //     this.setState({
    //       contests: resp.data.contests,
    //     });
    //   })
    //   .catch(console.error);
  }

  componentWillUnmount() {}
  
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
