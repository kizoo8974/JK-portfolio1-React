import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// HOBBY IMPORTS
import avatar1 from "../images/avatars/11.jpg";
import avatar2 from "../images/avatars/22.jpg";
import avatar3 from "../images/avatars/33.JPG";
import avatar4 from "../images/avatars/44.PNG";
import avatar5 from "../images/avatars/55.JPG";
import avatar6 from "../images/avatars/66.JPG";

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
                <img src={avatar1} alt="travel..." />
                <div className="myCarousel">
                <h3>travel</h3>
                <p>There has so many beautiful places in Canada. I’d like to travel from the eastern end of Canada to the western end someday.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="gardening..." />
                <div className="myCarousel">
                <h3>gardening</h3>
                <p>From pumpkin to peppers, I like to grow plants to bloom and bear fruit.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="walking with dog..." />
                <div className="myCarousel">
                <h3>taking a walk with danny</h3>
                <p>I love walking with my dog. Spring bank park is my favorite place for a walk.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="gaming..." />
                <div className="myCarousel">
                <h3>gaming</h3>
                <p>From cute pixel games to latest gorgeous 3D games, I'm avid gamer. The games I've played recently : Forza Horizon, Ring Fit Adventure, Children of Morta  </p>
                </div>
            </>
            <>
                <img src={avatar5} alt="rock festival..." />
                <div className="myCarousel">
                <h3>rock festival</h3>
                <p>Rock, Jazz &amp; R'n'B music... I love listening music and Music festival. The Smashing pumpkins' London concert was awesome! </p>
                </div>
            </>
            <>
                <img src={avatar6} alt="reading a book..." />
                <div className="myCarousel">
                <h3>reading</h3>
                <p>I love reading books or news articles. I read 3 CBC News articles on a daily basis. </p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;
