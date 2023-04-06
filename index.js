const tbody = document.querySelector("#tbody");
// const api = `http://35.242.182.188:8080/it-conference-kuva/users/paging?page=${x}&pageSize=${y}`
let x = 1;
let y = 14;

function fetchReq() {
  fetch(
    `http://35.242.182.188:8080/it-conference-kuva/users/paging?page=${x}&pageSize=${y}`
  )
    .then((data) => {
      return data.json();
    })
    .then((user) => {
      // console.log(user);
      let tableTr = user.data.pageData.users;

      tableTr.forEach((item, i) => {
        let firstname = item.firstname;
        let lastname = item.lastname;
        let cardId = item.generated.cardID;
        let phone = item.phone;
        let os = item.os;
        let data = item.date;
        let dataDate = data.slice(0, 10);
        let dataTime = data.slice(11, 19);

        let dataRes = `${dataDate} ${dataTime}`;

        let tr = document.createElement("tr");
        tr.innerHTML = " ";
        (tr.innerHTML = `
        <th scope="row">
        <input type="checkbox">
        </th>
        <td id="${cardId}">${cardId}</td>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${phone}</td>
        <td>${dataRes}</td>
        <td style="display: flex; flex-wrap: wrap; justify-content:center;">${os}</td> `),
          chill();

        tbody.appendChild(tr);
      });
    });
}
fetchReq();

function chill() {
  let child = tbody.childNodes;
  // console.log(child);
  for (let index = 0; index < child.length; index++) {
    const element = child.length + 1;
    document.getElementById("barchasi").textContent = element;
    return element;
  }
}

let load = document.getElementById("loadA");
// console.log(load);

load.addEventListener("click", () => {
  x += 1;

  console.log(x, y);
  fetchReq();
});
// console.log(x,y);
