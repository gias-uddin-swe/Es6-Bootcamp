const inputBox = document.getElementById("search-box").value;

const loadData = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=&{inputBox}`;
  fetch(url)
      .then((res) => res.json())
      
      .then((data) => console.log(data.teams))
    .catch(error=>console.log(error))
};

const showTeam = (data) => {
  const allPlyersDiv = document.getElementById("all-plyers");
  for (const team of data) {
    console.log(team);
    let li = document.createElement("li");
    li.innerText = team.idTeam;
    allPlyersDiv.appendChild(li);
  }
};
