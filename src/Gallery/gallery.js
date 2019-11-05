import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./gallery.scss";
import DztImageGalleryComponent from 'reactjs-image-gallery'

const Gallery = () => {
    const data = [
        {
            url: 'images/anfield.jpg',
            title: 'Anfield',
            thumbUrl: 'images/anfield.jpg',
        },
        {
            url: 'images/fans.jpg',
            title: 'OSCU',
            thumbUrl: 'images/fans.jpg',
        },
        {
            url: 'images/player-celebrations.png',
            title: 'Saleh',
            thumbUrl: 'images/player-celebrations.png',
        },
        {
            url: 'images/green-enviroment.png',
            title: 'Environment',
            thumbUrl: 'images/green-enviroment.png',
        },
        {
            url: 'images/lfc-team-women.jpeg',
            title: 'Women Team',
            thumbUrl: 'images/lfc-team-women.jpeg',
        },
        {
            url: 'images/inside_anfield.jpg',
            title: 'Inside Anfield',
            thumbUrl: 'images/inside_anfield.jpg',
        },
        {
            url: 'images/squad.jpg',
            title: 'Squad',
            thumbUrl: 'images/squad.jpg',
        },
        {
            url: 'images/cl-celebration.png',
            title: 'Champions legue celebration',
            thumbUrl: 'images/cl-celebration.png',
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
