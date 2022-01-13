import header from "./header.js"; // 상단 메뉴
import mainPageRender from "./mainPage.js"; // 메인 페이지
import loginButton from "./loginButton.js"; // 로그인 버튼
import menuButton from "./menuButton.js"; // 메뉴 버튼
import changeURL from "./changePage.js"; // URL 바꾸기

const $ = document;

const state = {
  state: "main",
};

const root = $.querySelector("#root");
const pageBody = $.querySelector("#pageBody");

header(root);
menu(root);
menuButton(root);
loginButton(root, "login", pageBody);
mainPageRender(pageBody);

window.addEventListener("popstate", () => changeURL(pageBody));
