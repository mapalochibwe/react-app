import React, { Component } from 'react';
import dog from './chihuahua-dog.jpeg'
import fox from './fox.jpg'
import food from './food.jpg'

//Array of Pictures
 export const imgUrls = [
  dog, fox, food
]

//Array of captions for the pictures
export const words = [
  'Photo one', 'Photo two', 'Photo three'
]

//Carousel Component
export class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentImageIndex: 0, //state of the image
      currentWordIndex: 0 //state of the caption
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

//Previous button
  previousSlide () {
    //Iterating through every image in the image array when the previous button is clicked
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
    //iterating through every caption in the words array when the previous button is clicked
    const lastWord = words.length - 1;
    const { currentWordIndex } = this.state;
    const shouldResetWord = currentWordIndex === 0;
    const indexSecond =  shouldResetWord ? lastWord : currentWordIndex - 1;
    this.setState({
      currentWordIndex: indexSecond
    });
  }

//Next button
  nextSlide () {
    //Iterating through every image in the image array when the next button is clicked
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
    //Iterating through every caption in the words array when the next button is clicked
    const lastWord = words.length - 1;
    const { currentWordIndex } = this.state;
    const shouldResetWord = currentWordIndex === lastWord;
    const indexSecond =  shouldResetWord ? 0 : currentWordIndex + 1;
    this.setState({
      currentWordIndex: indexSecond
    });
  }

  render () {
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
        <img src={imgUrls[this.state.currentImageIndex] }/>
        <p> {words[this.state.currentWordIndex] }</p>
        <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
      </div>
    );
  }
}

//creating the arrows
const Arrow = ({ direction, clickFunction, glyph }) => (
<div
  className={ `slide-arrow ${direction}` }
  onClick={ clickFunction }>
  { glyph }
</div>
);

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}
