import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard.js';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="10 modern layouts in 1 line of CSS"
                    views="742,651"
                    timestamp="16 Jul 2020"
                    channelImage="https://yt3.ggpht.com/yti/ANoDKi6AVZ_F33V2WtPqtZggGwdNZ_LKBNJf7iBHXMgJIw=s88-c-k-c0x00ffffff-no-rj-mo"
                    channel="Miguel Santiago"
                    image="http://i3.ytimg.com/vi/qm0IfG1GyZU/maxresdefault.jpg"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
