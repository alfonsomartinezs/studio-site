import { useRef, useState } from "react";

const Form = ({formFunction,buttonText = "submit"}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formAction = async (e) => {
    e.preventDefault();
    const response = await formFunction(e);
    nameRef.current.value = ""
    emailRef.current.value = ""
    messageRef.current.value = ""
    markClear();
  }

  const markSubmitted = () => {
    setIsSubmitted(true);
  }
  const markClear = () => {
    setIsSubmitted(false);
  }
  return (
    <form className={`form ${isSubmitted ? "submitted-form" : ""}`} onSubmit={formAction}>
      <label className="form-field">
        
        <input id="name" ref={nameRef}type="text" autoComplete="name" required />
        <span className="placeholder">Name</span>
      </label>

      <label className="form-field">
        
        <input id="email" ref={emailRef}type="email" autoComplete="email" required />
        <span className="placeholder">Email</span>
      </label>

      <label className="form-field">
        <textarea id="message" ref={messageRef} rows="10" minLength="5" required></textarea>
        <span className="placeholder">Message</span>
      </label>
      
      <button type="submit" onClick={markSubmitted}>{buttonText}</button>
    </form>


   );
}
 
export default Form;