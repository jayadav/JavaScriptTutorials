function fetch_data() {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          throw new Error("Network response is not OK");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetch_data()
  .then((res) => {
    console.log("Res:", res);
  })
  .catch((error) => {
    console.log("ERROR: ", error);
  });
