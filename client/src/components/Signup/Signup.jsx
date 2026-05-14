import styles from "./Signup.module.css";
import { MessageCircleHeart } from "lucide-react";

const Signup = () => {
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
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
            />
          </div>

          <p>
            Already have an account?
            <a className={styles.signUpLink} href="/login">
              Login
            </a>
          </p>

          <div className={styles.signupFormButtons}>
            <button className={styles.buttons}>Sign Up</button>
          </div>
        </form>

        <div className={styles.logoContainer}>
          <div>
            <MessageCircleHeart size={250} />
          </div>
        </div>
      </main>
    </>
  );
};

export { Signup };
