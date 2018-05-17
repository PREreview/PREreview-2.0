import React from 'react'

const styles = {
  image: {
    background: 'url("/assets/hero-image.jpg")',
    backgroundSize: 'cover',
    height: 500,
  },
}

const HeroImage = ({ style }) => <div
  style={ ({ ...styles.image, ...style }) }
/>

export default HeroImage
