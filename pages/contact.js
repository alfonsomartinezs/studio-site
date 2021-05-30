import Head from "next/head";
import Image from "next/image";
import AboutUser from "../components/AboutUser";
import Form from "../components/Form";

const Contact = () => {


  const submitForm = (e) => {
    console.log(e)
  }


  return (
    <>
      <Head>
        <title>Dot Art Studio | Contact</title>
      </Head>
      <section className="about-hero-section">
        <div className="about-image-container">
          <Image className="about-hero-image" layout="fill" src="/assets/image-phone.jpg" priority={true} alt="an old payphone with art painted over dirt."/>
        </div>
        <h1 className="large light text-center about-text">Contact</h1>
        <div className="about-hero-text">
          <div>
          <h2>Tell us about your project!</h2>
          <p>
              We’d love to hear more about your project. Please, leave a message below or give us a call. If you have a spare spacesuit, please visit us on our newly installed moon base! Otherwise our California office is open. If you find yourself nearby, come say hello!
          </p>
          </div>
          
        </div>
      </section>
        <section className="container contact-details">
          <h2>Contact Details</h2>
          
          <div>
            <h3>Main Office</h3>
            <p>Mail: contact@dot.com</p>
            <p>Address: 5555 Local Start CA</p>
            <p>Phone: 619-123-1234</p>
          </div>

          <div>
            <h3>Moon Base Office</h3>
            <p>Mail: contact@dot.com</p>
            <p>Address: 5555 Local Start CA</p>
            <p>Phone: 619-123-1234</p>
          </div>


          
        </section>

      <section className="container form-container">
        <div>
          <h2 className="contact-header">Contact Us</h2>
          <p className="contact-sub-header">Please fill out all fields. The form requires them.</p>
        </div>
        <Form buttonText="connect" formFunction={submitForm}/>
      </section>
      

      </>
  );
}
 
export default Contact;