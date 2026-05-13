import styles from "./Login.module.css";
import { MessageCircleHeart } from "lucide-react";

const Login = () => {
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
            <label htmlFor="username">Username :</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
            />
          </div>

          <div className={styles.formInputContainer}>
            <label htmlFor="username">Password :</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
            />
          </div>

          <p>
            Don't have an account?{" "}
            <a className={styles.signUpLink} href="/signup">
              Sign up
            </a>
          </p>

          <div className={styles.loginFormButtons}>
            <button className={styles.buttons}>Test account</button>
            <button className={styles.buttons}>Log in</button>
          </div>
          <button className={styles.googleLoginButton}>
            Log in with Google
          </button>
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

export { Login };
