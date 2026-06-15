import styles from "./TypingIndicator.module.css";

const TypingIndicator = ({ typingInfo }) => {
  return (
    <>
      <p className={styles.typingIndicator}>{typingInfo} ... </p>
    </>
  );
};

export { TypingIndicator };
