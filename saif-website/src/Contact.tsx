import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.paragraph}>
        Let's work on something together, you can reach me on my email
        <span className={styles.email}> hello@saifabdelkefi.com</span>
      </p>
    </div>
  );
}
