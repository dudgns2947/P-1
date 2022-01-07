import main from "./pages/MainPages.js";
import information from "./pages/InformationPages.js";
import login from "./pages/LoginPages.js";
import modify from "./pages/ModifyPages.js";
import secrets from "./pages/SecretPages.js";
import join from "./pages/SignupPages.js";
import posts from "./pages/PostPages.js";
import promotion from "./pages/PromotionPages.js";
import sw from "./pages/SwPages.js";

const navigateTo = (url) => {
  history.pushState(null, null, url); //page, title, url
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: main },
    { path: "/secrets", view: secrets },
    { path: "/info", view: information },
    { path: "/promotion", view: promotion },
    { path: "/sw", view: sw },
    { path: "/join", view: join },
    { path: "/posts", view: posts },
    { path: "/modify", view: modify },
    { path: "/login", view: login },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatches) => potentialMatches.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: True,
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
