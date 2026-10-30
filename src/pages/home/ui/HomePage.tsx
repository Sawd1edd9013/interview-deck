import { APP_NAME } from "@/shared/config";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{APP_NAME}</h1>
      <p className={styles.subtitle}>
        Тренажёр вопросов для подготовки к собеседованию
      </p>
    </section>
  );
};
