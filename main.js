const cssPathBefore =
  "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._aano > div > div > div:nth-child(";
const cssPathAfter =
  ") > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x1qughib.x6s0dn4.x1a02dak.x1q0g3np.xdl72j9 > div > div > div > div > div > a > div > div > span";
const cssPath1 =
  "body > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > div:nth-child(2) > section > main > div > header > section > ul > li:nth-child(";
const cssPath2 = ") > a > span > span";
let followers_count = parseInt(
  document.querySelector(cssPath1 + "2" + cssPath2).innerHTML
);
let following_count = parseInt(
  document.querySelector(cssPath1 + "3" + cssPath2).innerHTML
);
const getFollowings = () => {
  let followings = [];
  for (let i = 0; i < following_count; i++) {
    followings.push(
      document.querySelector(`${cssPathBefore}${i + 1}${cssPathAfter}`)
        .innerHTML
    );
  }
  localStorage.setItem("sol1", JSON.stringify(followings));
  alert("팔로우 수집 완료");
};
const getFollowers = () => {
  let followers = [];
  for (let i = 0; i < followers_count; i++) {
    followers.push(
      document.querySelector(`${cssPathBefore}${i + 1}${cssPathAfter}`)
        .innerHTML
    );
  }
  localStorage.setItem("sol2", JSON.stringify(followers));
  alert("팔로워 수집 완료");
};
const getFollowingButNotFollowers = () => {
  let result = [];
  let followings = JSON.parse(localStorage.getItem("sol1"));
  let followers = JSON.parse(localStorage.getItem("sol2"));
  for (following of followings)
    if (!followers.includes(following)) result.push(following);
  document.getElementById("sol-output").innerHTML =
    result.length == 0 ? "모두 맞팔을 해줬어요!" : result.join("\n");
};
let sui = document.createElement("div");
sui.innerHTML = `<button id="sol-get-followers">팔로워 수집 시작</button><button id="sol-get-followings">팔로우 수집 시작</button><button id="sol-print">맞팔 안해준 사람 보기</button><pre style="background: white; color: black" id="sol-output"></pre>`;
document.body.appendChild(sui);
sui.style.position = "fixed";
sui.style.top = "0px";
sui.style.zIndex = "99999999";
document.getElementById("sol-get-followings").onclick = getFollowings;
document.getElementById("sol-get-followers").onclick = getFollowers;
document.getElementById("sol-print").onclick = getFollowingButNotFollowers;
console.log(
  "%c[SOL] 이제 개발자도구는 닫아도 돼요!",
  "font-size: xx-large; color: green;"
);
