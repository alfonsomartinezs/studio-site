import { useState } from "react";

const Form = ({formFunction,buttonText = "submit"}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formAction = (e) => {
    e.preventDefault();
    formFunction(e)
  }

  const markSubmitted = () => {
    setIsSubmitted(true);
  }
  return (
    <form className={ `form ${isSubmitted ? "submitted-form": ""}`} onSubmit={formAction}>
      <label className="form-field">
        
        <input id="name" type="text" autoComplete="name" required />
        <span className="placeholder">Name</span>
      </label>

      <label className="form-field">
        
        <input id="email" type="email" autoComplete="email" required />
        <span className="placeholder">Email</span>
      </label>

      <label className="form-field">
        <textarea id="message"  rows="10" minLength="5" required></textarea>
        <span className="placeholder">Message</span>
      </label>
      
      <button type="submit" onClick={markSubmitted}>{buttonText}</button>
    </form>


   );
}
 
export default Form;