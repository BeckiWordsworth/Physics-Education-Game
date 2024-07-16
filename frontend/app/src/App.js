import React, { Component } from "react";
import PageHeader from "./components/page-header";
import Home from "./components/home";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import DashboardPage from "./components/dashboard-page";
// import UserPage from "./components/user-page";
// import TopicPage from "./components/topic-page";
// import Stats from "./components/stats-page";
// import PostQuizPage from "./components/post-quiz-page";
// import PostQuizLosePage from "./components/post-quiz-lose";
// import { Routes, Route } from "react-router-dom";

class App extends Component {
  state = {
    isAuthenticated: false,
    user: null,
    token: "",
    newResult: {},
    newResultAdded: false,
    totalScore: 0,
    crownData: 0,
  };

  // componentDidMount() {
  //   this.fetchResults();
  //   this.getCrowns();
  // }

  // fetchResults = () => {
  //   let UserId = localStorage.getItem("UserId");

  //   fetch(`http://localhost:8080/scores/${UserId}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       this.setState(
  //         {
  //           totalScore: json[0].total,
  //         },
  //         this.getCrowns
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // getCrowns = () => {
  //   let crownData = Math.floor(this.state.totalScore / 10);
  //   this.setState({
  //     crownData: crownData,
  //   });
  // };

  // postData = () => {
  //   const url = "http://localhost:8080/result";
  //   const { newResult } = this.state;
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(newResult),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 201) {
  //         this.setState({
  //           newResultAdded: true,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <Router>
        <div>
          <PageHeader />

          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </div>
      </Router>

      // <Router>
      //   <div className="app">
      //     <Header />

      //     <div className="content">
      //       <Routes>
      //         <Route path="/" exact component={HomePage} />
      //         {/* <Route path="/about-me/" element={<About />} />
      //     <Route path="/project/:id" element={<ProjectPage />} />
      //     <Route path="/my-projects/" element={<ProjectPageTech />} />
      //     <Route path="/articles/" element={<ArticlePage />} />
      //     <Route path="/talks/" element={<TalksPage />} />
      //     <Route path="/talks/:id" element={<TalkPage />} />
      //     <Route path="/phd/" element={<PhDPage />} />
      //     <Route path="/contact-me/" element={<ContactPage />} /> */}

      //         {/* <Route element={<PageNotFound />} /> */}
      //       </Routes>
      //     </div>

      //     <Footer />
      //   </div>
      // </Router>

      // <Router>
      //   <div className="app">
      //     <Header />

      //     <div className="content">
      //       <Switch>
      //         <Route path="/" exact component={HomePage} />
      //         <Route
      //           path="/dashboard"
      //           exact
      //           render={(props) => (
      //             <DashboardPage {...props} totalScore={this.state.totalScore} crownData={this.state.crownData} />
      //           )}
      //         />
      //         <Route path="/user" exact component={UserPage} />
      //         <Route path="/topic/:id" exact component={TopicPage} />
      //         <Route path="/PostQuizPage" exact component={PostQuizPage} />
      //         <Route path="/EndQuizPage" exact component={PostQuizLosePage} />
      //         <Route
      //           exact
      //           path="/stats"
      //           render={(props) => (
      //             <Stats {...props} totalScore={this.state.totalScore} pointsData={this.state.crownData} />
      //           )}
      //         />
      //       </Switch>
      //     </div>
      //   </div>
      // </Router>
    );
  }
}

export default App;
