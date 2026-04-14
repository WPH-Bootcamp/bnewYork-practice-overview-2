// Fetch API dengan Promise + .then().catch()
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err.message));

// Fetch API dengan async/await + try catch
async function getDataPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getDataPost();
