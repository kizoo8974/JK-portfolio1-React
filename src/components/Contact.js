import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";


const Contact = () => {
    
    const [successMessage, setSuccessMessage ] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // emailjs part
    const serviceID = "service_ID22";
    const templateID = "template_ID22";
    const userID = "user_4jDxZN0Y3MTKcnCzLRGsK";

    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current, userID)
        .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
        }, (error) => {
            console.log(error.text);
        });
    };
    

   

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
            <span className="successMessage">{successMessage}</span>
            </div>
            

            <div className="container">
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                       

{/* register your input into the hook by invoking the "register" function */}
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", { required: true , maxLength: 20 })} />
                         {/* include validation with required or other standard HTML validation rules */}
                         
                        {/* errors will return when field validation fails  */}
                        {errors.name && <div className="error-message">Please, add your name</div>}
                        
  

                        <div className="line"></div>


                        
                        </div>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input
                      
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name ="phone"
                        {...register("phone", { required: true })} />
                        {errors.phone && <div className="error-message">Please, add your phone number</div>}
                        <div className="line"></div>
                        </div>
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input
                      
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email", { required: 'Email is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                           
                        }
                         })} />
                        {errors.email && <div className="error-message">Email field is required</div>}
                        <div className="line"></div>
                        </div>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", { required: true })} />
                        {errors.subject && <div className="error-message">Subject field is required</div>}
        
                        <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="Please describe your project shortly..."
                        name="description"
                        {...register("description", { required: true })}
                        ></textarea>
                        {errors.description && <div className="error-message">Description field is required</div>}
                        <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;