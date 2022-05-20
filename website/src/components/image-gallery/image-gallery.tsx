import React from "react"
import Gallery from "react-photo-gallery"
import Image from "@theme/IdealImage"
import style from "./image-gallery.module.css"

const imageRenderer = ({ photo }) => {
  return (
    <div
      key={photo.src}
      style={{
        margin: "2px",
        height: photo.height,
        width: photo.width,
        overflow: "hidden",
      }}
    >
      <Image
        img={require(`../../../static/img/careers/gallery/${photo.src}`)}
      />
    </div>
  )
}

const ImageGallery = props => (
  <div className={style.imageGallery}>
    <Gallery {...props} renderImage={imageRenderer} />
  </div>
)

export default ImageGallery
