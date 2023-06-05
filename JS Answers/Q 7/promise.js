function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ms >= 0) {
          resolve(`Delayed for ${ms} milliseconds`);
        } else {
          reject('Invalid delay time');
        }
      }, ms);
    });
  }
  
  // Usage:
  console.log('Before delay');
  
  delay(2000)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  console.log('After delay');
  