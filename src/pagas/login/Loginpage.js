import './Loginpage.css';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
const Loginpage = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  return (
    <>
      <section className="container">
        <div className="forms">
          <div className="content">
            <h2 className="title">sign in</h2>

            <button className="continue-button">
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256" alt="Google logo png from iconscout.com" className="logo" />
              continue with google
            </button>

            <fieldset className="field">
              <legend>or</legend>
              <div className="login-input">
                <label for="loginemail"><CgMail  className='icon' /></label>
                <input type="email" id="loginEmail" placeholder="email" />
              </div>
              <div className="login-input">
                <label for="loginpassword"><RiLockPasswordLine className='icon'/></label>
                <input type="password" id="loginPassword" placeholder="password" />
                <FaEyeSlash className='icon' />
              </div>
            </fieldset>

            <div className="adjust">
              <label for="remember">
                <input type="checkbox" id="remember" /> remember me
              </label>
              <a href="#">forgot password</a>
            </div>

            <button type="submit" className="signin">sign in</button>

            <p className="text">not have account?</p>

            <button className="toggle-button">register</button>
          </div>
        
        </div>
      </section>
    </>

  );
};
export default Loginpage;