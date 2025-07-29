import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contactContainer} jumpAnimation`}>
      <p className={styles.contactParagraph}>
        I am currently open to full stack web developer roles, you can reach me
        at{" "}
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
