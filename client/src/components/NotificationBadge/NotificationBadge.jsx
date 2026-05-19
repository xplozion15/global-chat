import styles from "./NotificationBadge.module.css";

const NotificationBadge = () => {
  const notificationCount = 10;
  return (
    <>
      <div className={styles.notification}>{notificationCount}</div>
    </>
  );
};

export { NotificationBadge };
