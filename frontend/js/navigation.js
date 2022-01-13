const $ = document;

export default function menuButton(root) {
  /* 좌측 상단 메뉴 버튼 */
  const menuButton = $.createElement("div");
  menuButton.className = "menuButton";
  root.appendChild(menuButton);

  const menuButtonVector1 = $.createElement("div");
  menuButtonVector1.className = "menuButtonVector1";
  menuButton.appendChild(menuButtonVector1);
  const menuButtonVector2 = $.createElement("div");
  menuButtonVector2.className = "menuButtonVector2";
  menuButton.appendChild(menuButtonVector2);
  const menuButtonVector3 = $.createElement("div");
  menuButtonVector3.className = "menuButtonVector3";
  menuButton.appendChild(menuButtonVector3);

  menuButton.addEventListener("click", () => showMenuList(leftMenu));

  const leftMenu = $.createElement("div");
  leftMenu.className = "leftMenu hidden";
  root.appendChild(leftMenu);

  const leftMenuTable = $.createElement("table");
  leftMenuTable.className = "leftMenuTable";
  leftMenuTable.innerHTML = `<thead></thead>
    <tbody>
        <tr>
            <td class="leftMenuTableListText">자유 게시판</td>
        </tr>
        <tr>
            <td class="leftMenuTableListText">비밀 게시판</td>
        </tr>
        <tr>
            <td class="leftMenuTableListText">정보 게시판</td>
        </tr>
        <tr>
            <td class="leftMenuTableListText">홍보 게시판</td>
        </tr>
        <tr>
            <td class="leftMenuTableListText">SW 게시판</td>
        </tr>
    </tbody>`;
  leftMenu.appendChild(leftMenuTable);

  const leftMenuTableText = $.createElement("table");
  leftMenuTableText.className = "leftMenuTableText";
}

function showMenuList(leftMenu) {
  if (leftMenu.classList.contains("hidden")) {
    leftMenu.classList.remove("hidden");
  } else {
    leftMenu.classList.add("hidden");
  }
}
