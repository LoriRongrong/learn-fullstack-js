import Header from "./Header";
import React from "react";
import ContestList from "./ContestList";
import Contest from './Contest';
const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming Contest",
      contests: this.props.initialContests,
    };
  }
  // componentDidMount() {

  // }
  // componentDidMount() {
  //   // ajax ...
  //   // axios
  //   //   .get("/api/contests")
  //   //   .then((resp) => {
  //   //     this.setState({
  //   //       contests: resp.data.contests,
  //   //     });
  //   //   })
  //   //   .catch(console.error);
  // }
  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    })
  };
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
        
      </div>
    );
  }
}

export default App;
