const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error occurred:', err);
      res.status(500).send('Something went wrong!'); // Send a proper error response
    });
});

//Simulate async operation that may fail
function someAsyncOperation(){
  return new Promise((resolve,reject)=>{ 
    const randomNumber = Math.random();
    if(randomNumber<0.5){
        reject(new Error('Something went wrong during async operation'));
    }else{
        resolve();
    }
  });
}
app.listen(3000, () => console.log('Server listening on port 3000'));