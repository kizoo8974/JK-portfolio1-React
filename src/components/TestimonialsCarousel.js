import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.jpg";
import avatar2 from "../images/avatars/avatar-2.jpg";
import avatar3 from "../images/avatars/avatar-3.jpg";
import avatar4 from "../images/avatars/avatar-4.jpg";
import avatar5 from "../images/avatars/avatar-5.jpg";

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
                <img src={avatar1} alt="avatar1..." />
                <div className="myCarousel">
                <h3>Avatar 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto nobis eum repellat, consequuntur optio corrupti praesentium fuga? Repudiandae, quis!</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="avatar2..." />
                <div className="myCarousel">
                <h3>Avatar 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto nobis eum repellat, consequuntur optio corrupti praesentium fuga? Repudiandae, quis!</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="avatar3..." />
                <div className="myCarousel">
                <h3>Avatar 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto nobis eum repellat, consequuntur optio corrupti praesentium fuga? Repudiandae, quis!</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="avatar4..." />
                <div className="myCarousel">
                <h3>Avatar 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto nobis eum repellat, consequuntur optio corrupti praesentium fuga? Repudiandae, quis!</p>
                </div>
            </>
            <>
                <img src={avatar5} alt="avatar5..." />
                <div className="myCarousel">
                <h3>Avatar 5</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto nobis eum repellat, consequuntur optio corrupti praesentium fuga? Repudiandae, quis!</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;
