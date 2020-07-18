import React, { Component } from "react";
import "./styles.css";
import quizService from "./quizService";
import Box from "./questionBox";
import Result from "./result";

export default class App extends Component {
  state = { questionBank: [], score: 0, response: 0 };

  questionVal = () => {
    quizService().then(question => {
      this.setState({ questionBank: question });
    });
  };

  playAgain = () => {
    this.questionVal();
    this.setState({ score: 0, response: 0 });
  };

  componentDidMount() {
    this.questionVal();
    console.log("done");
  }

  selectedHandle = (correct, answer) => {
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : null
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title">game</div>
        {this.state.questionBank.length > 0 &&
          this.state.response < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <Box
                question={question}
                option={answers}
                key={questionId}
                selected={answer => this.selectedHandle(answer, correct)}
              />
            )
          )}
        {this.state.response === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}
