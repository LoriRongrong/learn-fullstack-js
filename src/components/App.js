import Header from "./Header";
import React from "react";
import ContestPreview from "./ContestPreview";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        pageHeader: "Naming Contest",
        contests: [] 
    };
  }
  componentDidMount() {
      // ajax ...
      this.setState({
          contests: data.contests
      });
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />

        <div>
            {/* everytime have a map call, need a unique key */}
            {this.state.contests.map(contest =>
                <ContestPreview key={contest.id} {...contest} />

            )}
        </div>
      </div>
    );
  }
}

export default App;
