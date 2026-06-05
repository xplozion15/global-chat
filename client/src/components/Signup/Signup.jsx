import styles from "./Signup.module.css";
import { MessageCircleHeart } from "lucide-react";
import { useState } from "react";
import { registerUser } from "../../services/authServices";
import { useNavigate } from "react-router";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    nickname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userFormData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className={styles.signupFormContainer}>
        <form className={styles.signupForm}>
          <div className={styles.formBranding}>
            <MessageCircleHeart />
            <p>Global Chat</p>
          </div>

          <h1>Sign Up</h1>

          <div className={styles.formInputContainer}>
            <label htmlFor="nickname">Nickname:</label>
            <input
              className={styles.input}
              type="text"
              name="nickname"
              id="nickname"
              value={userFormData.nickname}
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
              value={userFormData.username}
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
              value={userFormData.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              value={userFormData.password}
              onChange={onChangeHandler}
            />
          </div>

          <p>
            Already have an account?
            <a className={styles.signUpLink} href="/login">
              Login
            </a>
          </p>

          <div className={styles.signupFormButtons}>
            <button className={styles.buttons} onClick={signUpHandler}>
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export { Signup };
