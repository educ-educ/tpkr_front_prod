import * as React from 'react';
import CarouselElement from '../CarouselElement';

const CarouselCountContent = ({articles=[], width, widthItem}) => {

    let sliceNumber = 4;
    let difference = 24;

    if(width > 1200) {
        sliceNumber = 4
        difference = 24;
    } else if (width > 992) {
        sliceNumber = 3
        difference = 28;
    }
    else if (width > 562) {
        sliceNumber = 2
        difference = 20;
    } else {
        sliceNumber = 1
        difference = 20;
    }
   
    const carouselWidth = widthItem/sliceNumber - difference;
    const sliderNumber = articles.length/sliceNumber;

    const sliders = articles.map((element) => {
        return {content: element, width: carouselWidth}
    })
    
    const itemInSliderNumber = sliders.length/sliderNumber;
    let sliderModified = new Array(0)

    for(let i = 0; i < sliders.length; i += itemInSliderNumber) {
        sliderModified.push(sliders.slice(i, i + itemInSliderNumber))
    }

    return (
        <div>
            <CarouselElement sliderModified={sliderModified} itemInSliderNumber={articles.length}/>
        </div>
    )

};

export default CarouselCountContent;