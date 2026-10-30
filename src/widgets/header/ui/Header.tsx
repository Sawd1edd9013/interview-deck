import { Link, NavLink } from "react-router";
import { APP_NAME, ROUTES } from "@/shared/config";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: ROUTES.home, label: "Главная" },
  { to: ROUTES.catalog, label: "Каталог" },
  { to: ROUTES.progress, label: "Прогресс" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to={ROUTES.home} className={styles.logo}>
          {APP_NAME}
        </Link>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === ROUTES.home}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
