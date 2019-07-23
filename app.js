const httpR = new SimpleHTTP();

//Get Users
// httpR
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//User data
const data = {
  name: "Adnan Reza",
  username: "adnanreza",
  email: "adnan.reza@outlook.com"
};

// //Create user
// httpR
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// //Update user
// httpR
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//Update user
httpR
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
