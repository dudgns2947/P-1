const $ = document;

export default function menu(root) {
  /* 상단 메뉴 틀 */
  const header = $.createElement("div");
  header.className = "header";
  header.appendChild(header__column1);
  header.appendChild(header__column2);
  header.appendChild(header__column3);

  const header__column1 = $.createElement("div");
  header__column1.className = "header__column";
  const nav_btn = $.createElement("button");
  nav_btn.className = "nav-btn";
  const icon = $.createElement("i");
  icon.className = "fas fa-bars";
  nav_btn.appendChild(icon);
  header__column1.appendChild(nav_btn);

  const header__column2 = $.createElement("div");
  header__column2.className = "header__column logo_login_box";
  const header_logo = $.createElement("div");
  header_logo.className = "header_logo";
  const logo = $.createElement("span");
  logo.innerHTML = "AJOU MEMO";
  logo.className = "logo";
  header_logo.appendChild(logo);
  header__column2.appendChild(header_logo);

  const header__column3 = $.createElement("div");
  header__column3.className = "header__column";
  const login_btn = $.createElement("button");
  login_btn.className = "login_btn";
  login_btn.id = "login";
  login_btn.innerHTML = "Log In";
  const icon2 = $.createElement("i");
  icon2.className = "fas fa-sign-in-alt";
  login_btn.appendChild(icon2);
  header__column3.appendChild(login_btn);

  root.appendChild(header);
}
