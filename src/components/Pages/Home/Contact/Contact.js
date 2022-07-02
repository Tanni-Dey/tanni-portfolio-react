import React from 'react';
import emailjs from 'emailjs-com';
import contact from '../../../../images/contact.png'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_q1dn64d', e.target, '7C1BLBwLvSSFQv-_y')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });


        e.target.reset();
    }

    return (
        <div id='contact' className='text-black'>
            <h2 className='text-5xl font-serif text-primary text-center font-bold'>Get <span className='text-secondary'>in Touch</span></h2>

            <div class="hero min-h-screen">
                <div class="hero-content grid gap-10 grid-cols-1 md:grid-cols-2">
                    <div class="text-center">
                        <img className='' src={contact} alt="" />
                    </div>
                    <div class="card w-full shadow-2xl bg-accent">
                        <div class="card-body">
                            <form onSubmit={sendEmail} action="">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Subject</span>
                                    </label>
                                    <input type="text" name='subject' placeholder="Your Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Message</span>
                                    </label>
                                    <textarea name='message' rows='4' cols='50' type="text" placeholder="Write your Message" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <input type='submit' class="btn btn-secondary text-white hover:bg-transparent rounded-full" value='Send Message' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Contact;