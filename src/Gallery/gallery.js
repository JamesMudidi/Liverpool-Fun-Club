import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./gallery.scss";
import DztImageGalleryComponent from 'reactjs-image-gallery'

const Gallery = () => {
    const data = [{
        url: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Kayak',
        thumbUrl: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
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
