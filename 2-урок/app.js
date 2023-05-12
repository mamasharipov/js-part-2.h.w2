
const jsonData = {
  name: "Astana",
  age: 18,

};

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve(jsonData);
    } else {
      reject("повторите попытку");
    }
  }, 500);
});

const jsString = JSON.stringify(jsonData);
myPromise
  .then((data) => {
      const jsObject = JSON.parse(jsString);
      return jsObject;
  })
  .then((parsedData) => {
      setTimeout(()=>{
          console.log("Ожидайте, идет загрузка...");
      }, 1000)
      setTimeout(()=>{
    console.log("Данные успешно обработаны", parsedData);
      }, 2000)
  })
  .catch((error) => {
    setTimeout(()=>{
    console.error("Произошла ошибка,", error);
    },500)
  })
  .finally(() => {
      setTimeout(()=>{
    console.log("Операция завершена");

      }, 2300)
  });

