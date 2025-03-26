import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contactContainer} jumpAnimation`}>
      <p className={styles.contactParagraph}>
        I am currently open to work, you can reach me on my email{" "}
        <a
          className={styles.email}
          target="_blank"
          href="mailto:hello@saifabdelkefi.com"
        >
          hello@saifabdelkefi.com
        </a>
      </p>
    </div>
  );
}
