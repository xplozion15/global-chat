import styles from "./Login.module.css";
import { MessageCircleHeart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../../services/authServices";
import { API_BASE_URL } from "../../config/api";

const Login = () => {
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await loginUser(loginFormData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const googleLoginHandler = (e) => {
    e.preventDefault();
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  const onChangeHandler = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main className={styles.loginFormContainer}>
        <form className={styles.loginForm}>
          <div className={styles.formBranding}>
            <MessageCircleHeart />
            <p>Global Chat</p>
          </div>

          <h1>Log in</h1>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              onChange={onChangeHandler}
            />
          </div>

          <p>
            Don't have an account?
            <a className={styles.signUpLink} href="/signup">
              Sign up
            </a>
          </p>

          <div className={styles.loginFormButtons}>
            <button className={styles.buttons}>Test account</button>
            <button className={styles.buttons} onClick={loginHandler}>
              Log in
            </button>
          </div>
          <button
            className={styles.googleLoginButton}
            onClick={googleLoginHandler}
          >
            Log in with Google
          </button>
        </form>
      </main>
    </>
  );
};

export { Login };
