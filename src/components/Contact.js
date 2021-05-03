import React, {useState} from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"

function Contact () {
    const [successMessage, setSuccessMessage] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()

    const serviceID = "service_ID"
    const templateID = "template_ID"
    const userID = "user_8FnPkFtQwTeGlAMkjWriS"

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message,
            }, 
            userID
        )
        r.target.reset()
    }
    
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.")
            }).catch(err => console.error(`Something went wrong ${err}`))
    }

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact Me<span id="contact-overlap">Contact Me</span></h1>
                <p>Please fill out the form below to get in touch. I look forward to meeting you.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row contact-input-area">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="NAME" 
                                    name="name" 
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {value: 20, message: "Please enter a name with fewer than 20 characters"}
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input 
                                    className="form-control" 
                                    placeholder="PHONE NUMBER (OPTIONAL)" 
                                    name="phone" 
                                    type="text"
                                    {...register("phone")}
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span> */}
                            {/* EMAIL INPUT */}
                            <div className="text-center"> 
                                <input 
                                    className="form-control" 
                                    placeholder="EMAIL" 
                                    name="email" 
                                    type="email"
                                    {...register("email", {
                                        required: "Please provide your email",
                                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email format" }
                                      })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input 
                                    className="form-control" 
                                    placeholder="SUBJECT" 
                                    name="subject" 
                                    type="text"
                                    {...register("subject", {
                                        required: "Please include a subject"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>  
                        <div className="col-md-5 col-xs-12">
                            {/* MESSAGE */}
                            <div className="text-center">
                                <textarea 
                                    className="form-control" 
                                    placeholder="MESSAGE" 
                                    name="message" 
                                    type="text"
                                    {...register("message", {
                                        required: "Please describe what this is in regards to"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                                <span className="error-message">
                                    {errors.message && errors.message.message}
                                </span>
                                <button className="btn-main-offer contact-btn">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Contact
