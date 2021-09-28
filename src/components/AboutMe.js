import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, non aut iusto, ab architecto illum esse alias eos harum eaque vel aliquam. Quaerat, incidunt corporis? Nostrum porro reiciendis temporibus. Atque.

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quos maxime quis fugiat impedit assumenda, nulla eum expedita adipisci et hic atque possimus, molestias explicabo. Officia natus consequatur ab nobis.

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolor illo maxime ullam accusamus dolorem, vel voluptatibus eum at itaque eos tempore, asperiores ipsum laboriosam porro necessitatibus dolore incidunt sit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
