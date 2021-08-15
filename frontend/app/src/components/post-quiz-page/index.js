import React from 'react'
import './style.scss'


class PostQuizPage extends React.Component {


  render() {

    return(

      <div className="winner-container">
        <h1> Lesson Complete +10 XP</h1>

        <img src={"./high_five_snl.gif"} alt="winner" />
        <h2> Good job! </h2>

        <a href={"/dashboard"}><button>Continue</button></a>
      </div>
    )
  }

}

export default PostQuizPage
