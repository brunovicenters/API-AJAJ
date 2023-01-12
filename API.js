//fetch() -- makes the request;
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done!", data);
//     return fetch("https://swapi.dev/api/people/4/");
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done!", data);
//   })
//   .catch((er) => {
//     console.log("ERROR!", er);
//   });

//fetch() + async;
const loadSWCharacters = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (er) {
    console.log(er);
  }
};
loadSWCharacters();
