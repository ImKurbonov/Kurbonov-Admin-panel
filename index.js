const tbody = document.querySelector("#tbody");
// const api = `http://35.242.182.188:8080/it-conference-kuva/users/paging?page=${x}&pageSize=${y}`
let x = 1;
let y = 14;

// function chill() {
//   let child = tbody.childNodes.length;
//   console.log(child);

//   // console.log(child);
//   for (let index = 0; index < child.length; index++) {
//     const element = child.length + 1;
//     document.getElementById("barchasi").textContent = element;
//     return element;
//   }
// }
// chill()


console.log(tbody.childNodes.length);


function fetchReq() {
  fetch(
    `http://35.242.182.188:8080/it-conference-kuva/users/paging?page=${x}&pageSize=${y}`
  )
    .then((data) => {
      return data.json();
    })
    .then((user) => {
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

          tbody.appendChild(tr);
      });
    });
}
fetchReq();



let load = document.getElementById("loadA");
// console.log(load);

load.addEventListener("click", () => {
  x += 1;

  console.log(x, y);
  fetchReq();
});
// console.log(x,y);

// const getData = async (resurs) => {
//     const req = await fetch(resurs)
//     const data = await req.json()
//     return data
// }
// getData(API)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


async function getApi() {
  tbody.innerHTML = ""
  load.style.display = 'none'
  const api = await fetch('http://35.242.182.188:8080/it-conference-kuva/users/all');
  const data = await api.json();
  getUserAll(data)
  function getUserAll(user) {
    document.getElementById('barchasi').textContent = user.length
    user.forEach((item, i) => {
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
      tr.innerHTML = `
      <th scope="row">
      <input type="checkbox">
      </th>
      <td id="${cardId}">${cardId}</td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${phone}</td>
      <td>${dataRes}</td>
      <td style="display: flex; flex-wrap: wrap; justify-content:center;">${os}</td> `;

      tbody.appendChild(tr);
    })
  }
}
getApi()
// All User
document.getElementById('barchasiEl').addEventListener('click', getApi)

// REGISTER TODAY OF USERS
async function getToday() {
  tbody.innerHTML = ""

  let child = tbody.childNodes;
  // console.log(child);


  load.style.display = 'none'

  const data = await fetch('http://35.242.182.188:8080/it-conference-kuva/users/today');
  const user = await data.json();
  getUserToday(user)
  function getUserToday(user) {
    document.getElementById('bugunEl').textContent = user.length;
    user.forEach((item, i) => {
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
      tr.innerHTML = `
      <th scope="row">
      <input type="checkbox">
      </th>
      <td id="${cardId}">${cardId}</td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${phone}</td>
      <td>${dataRes}</td>
      <td style="display: flex; flex-wrap: wrap; justify-content:center;">${os}</td>`;

      tbody.appendChild(tr);
    })
  }
}
getToday()
document.getElementById('bugun').addEventListener('click', getToday)

// 
async function getKecha() {
  tbody.innerHTML = ""

  load.style.display = 'none'

  const api = await fetch('http://35.242.182.188:8080/it-conference-kuva/users/yesterday');
  const data = await api.json();
  user(data)
    function user(userEl){
      document.getElementById('kechaEl').textContent = userEl.length
      userEl.forEach((item, i) => {
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
        tr.innerHTML = `
      <th scope="row">
      <input type="checkbox">
      </th>
      <td id="${cardId}">${cardId}</td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${phone}</td>
      <td>${dataRes}</td>
      <td style="display: flex; flex-wrap: wrap; justify-content:center;">${os}</td> `;

        tbody.appendChild(tr);
      })
    }
}
getKecha()
document.getElementById('kecha').addEventListener('click', getKecha)


