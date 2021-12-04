import React, {Component} from "react";
import {IMAGE_PATH} from "../../constants";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryImages : [],
            photoIndex: 0,
            isOpen: false,
        }
    }

    componentDidMount() {
        this.setGalleryImages();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.galleryImages !== prevProps.galleryImages ){
            this.setGalleryImages();
        }
    }
    setGalleryImages = () => {
        let galleryImages = this.props.galleryImages;
        let images = galleryImages.map(gal =>{
            return IMAGE_PATH+gal.filename;
        });
        console.log(images)

        this.setState({
            galleryImages : this.props.galleryImages,
            images : images
        })
    }

    openModal=(index) => {
        this.setState({ isOpen: true, photoIndex : index })
    }

    render(){
        let galleryImages = this.state.galleryImages || [];
        let photoIndex = this.state.photoIndex;
        let images = this.state.images || [];
        console.log(images)
        console.log(photoIndex)

        return(
            <>
                <div className="gallery-wrapper">
                    {galleryImages.length === 0 &&
                    <h5>Images will be added soon.</h5>
                    }

                    {galleryImages.length > 0 && galleryImages.map((gal,index) =>
                        <div className="each-gallery-block" onClick={() => this.openModal(index)}>
                            <figure>
                                <img src={IMAGE_PATH+gal.filename} alt={gal.filename} />
                            </figure>
                        </div>
                    )}
                </div>
                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </>

        )
    }
}

export default Gallery;
