let is_ok = true;

let customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(task);
      }, time);
    } else {
      reject("error");
    }
  });
};

export default customFetch;
