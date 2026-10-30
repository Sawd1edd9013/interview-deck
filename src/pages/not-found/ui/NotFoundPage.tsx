import { Link } from "react-router";
import { ROUTES } from "@/shared/config";

export const NotFoundPage = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Такой страницы не существует.</p>
      <Link to={ROUTES.home}>На главную</Link>
    </section>
  );
};
