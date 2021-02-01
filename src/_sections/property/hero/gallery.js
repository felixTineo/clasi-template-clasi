import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

const Commune = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  padding: 1rem;
  //font-size: .8rem;
  background-color: #000;
  margin: 0;
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  background-color: #000;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`

export default ({ images, commune })=> {
  console.log(images);
  const gallery = images.map(item => ({ original: item.url, thumbnail: item.url, renderItem: ({ original }) => <ImageContainer src={original}><Commune>{commune}</Commune></ImageContainer> }));
  return(
    <ImageGallery
      items={gallery}
      showPlayButton={false}
    />
  )
}