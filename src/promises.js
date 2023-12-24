import React from "react";

const Promises = () => {
  //create a promise in a var
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promises code is running");
      resolve();
    }, 1000);
  });

  //promises attach with then
  // then connect to the resolve parameter if success then use then
  data.then(() => {
    console.log("promises consumed ");
  });

  //create a promise2 with in same line
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promises2 code is running");
      resolve();
    }, 1000);
  }).then(() => {
    console.log("promises2 consumed ");
  });

  //create promise3 with parameter
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promises3 code is running");
      resolve({ name: "ish" });
    }, 1000);
  });

  promise3.then((user) => {
    console.log(user);
  });

  //create promise4 with error
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        reject("error:something went wrong");
      } else {
        console.log("promises4 code is running");
        resolve({ name: "ish" });
      }
    }, 1000);
  });
  promise4
    .then(() => {
      console.log("promise4 resolved");
    })
    .catch((error) => {
      console.log(error);
    });

  //create promise5 with chaning
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("error:something went wrong");
      } else {
        console.log("promises5 code is running");
        resolve({ name: "ish" });
      }
    }, 1000);
  });
  promise5
    .then((user) => {
      return user.name;
    })
    .then((name) => {
      console.log(name);
    })
    .catch(() => {
      console.log("promise5 rejected");
    })
    .finally(() => {
      console.log("promises5 ended");
    });

  //create promise6 with async/await
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("error:something went wrong.promise6");
      } else {
        console.log("promises6 code is running");
        resolve({ name: "ish" });
      }
    }, 1000);
  });
  async function consume() {
    try {
      const result = await promise6;
      console.log(result, "promise6");
    } catch (error) {
      console.log(error);
    }
  }
  consume();

  //create promise7 with api
  const promise7 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          reject("Reject the promise if there's an error");
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        resolve(data); // Resolve the promise with the parsed data
      })
      .catch((error) => {
        reject(error); // Reject the promise if there's an error
      });
  });
  promise7
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("api succefully run or not");
    });

  //api run with async /await

  const promise8 = async () => {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const response =  await fetchData.json();
      console.log(response);
    } catch (error) {
      console.log("something is went wrong", error);
    }
  };
  promise8()
  return <div></div>;
};

export default Promises;
