function fetch_data(sucessCallback, errorCallback) {
  fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      sucessCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}

fetch_data(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
);
