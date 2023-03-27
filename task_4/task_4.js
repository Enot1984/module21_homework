function usePromise() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random() * 100)
      randomNumber % 2 ? reject(randomNumber) : resolve(randomNumber)
      }, 3000);  
    });
  
    myPromise
      .then((result) => {
        console.log('Завершено успешно. Сгенерированное число —', result);
      })
      .catch((error) => {
        console.log('Завершено с ошибкой. Сгенерированное число —', error);
      })
  };
  
  usePromise();
  
