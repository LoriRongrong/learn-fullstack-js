import Header from "./Header";
import React from "react";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import PropTypes from "prop-types";
const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
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
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return "Naming Contests";
  }
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
    }

    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }
  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
