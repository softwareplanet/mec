import React from 'react'
import * as styles from './Slider.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideElement from '../SlideElement/SlideElement';
import gun from '../../../equipment/tanks/t-90/images/pic2.png';
import { graphql } from 'gatsby';

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title                    
                    image {                        
                        childImageSharp {
                          gatsbyImageData 
                        }
                      }
                }
                body
            }
        }
    `;

const ImageSlider = () => {

  const images = [gun, gun, gun];
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideElement slideImage={image} key={index} />
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider;