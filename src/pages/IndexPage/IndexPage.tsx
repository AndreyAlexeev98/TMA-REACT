// @ts-nocheck
import type { FC } from "react";
import { Link } from "~/components/Link/Link.tsx";
import { Page } from "~/components/Page/Page.tsx";
import { routes } from "~/navigation/routes.tsx";

import "./IndexPage.css";

export const IndexPage: FC = () => {
  return (
    <Page title="Добро пожаловать!">
      <h3>Меню:</h3>
      <ul className="index-page__links">
        {routes.map(
          ({ path, title, icon }) =>
            title && (
              <li className="index-page__link-item" key={path}>
                <Link className="index-page__link" to={path}>
                  {icon && <i className="index-page__link-icon">{icon}</i>}
                  {title}
                </Link>
              </li>
            )
        )}
      </ul>
    </Page>
  );
};
