import React from 'react';
import BannerSlider from './BannerSlider';
import Review from './Review';
import PostJob from './PostJob';

const Home = () => {

    return (
        <div>
            <BannerSlider></BannerSlider>
            <PostJob></PostJob>
            <Review></Review>
        </div>
    );
};

export default Home;