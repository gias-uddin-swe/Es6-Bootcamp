const inputBox = document.getElementById("search-box").value;

const loadData = () => {
  const url =
    `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=&{inputBox}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.teams));
};

