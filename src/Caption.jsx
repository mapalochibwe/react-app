// import React, { Component } from 'react';
//
// export const words = [
//   'Photo one', 'Photo two', 'Photo three'
// ]
//
// export class Describe extends Component{
//   constructor (props) {
//     super(props);
//     this.state = {
//       currentWordIndex: 0
//     }
//     this.previousWord = this.previousWord.bind(this);
//     this.nextWord = this.nextWord.bind(this);
//   }
//
//
//   previousWord(){
//     const lastWord = words.length - 1;
//     const { currentWordIndex } = this.state;
//     const shouldResetWord = currentWordIndex === 0;
//     const indexSecond =  shouldResetWord ? lastWord : currentWordIndex - 1;
//     this.setState({
//       currentWordIndex: indexSecond
//     });
//   }
//
//   nextWord(){
//     const lastWord = words.length - 1;
//     const { currentWordIndex } = this.state;
//     const shouldResetWord = currentWordIndex === lastWord;
//     const indexSecond =  shouldResetWord ? 0 : currentWordIndex + 1;
//     this.setState({
//       currentWordIndex: indexSecond
//     });
//   }
//
//
//   render(){
//     return(
//       <div>
//         <p> {this.previousWord} {this.nextWord} {words[this.state.currentWordIndex] }</p>
//       </div>
//     )
//   }
// }
