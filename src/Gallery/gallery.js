import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./gallery.scss";
import DztImageGalleryComponent from 'reactjs-image-gallery'

const Gallery = () => {
    const data = [{
        url: '',
        title: '',
        thumbUrl: '',
    },
    ];
    return (
        <div>
            <Header />
            <DztImageGalleryComponent
                images={data} />
            <Footer />
        </div>
    );
};

export default Gallery;
