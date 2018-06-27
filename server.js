const express = require('express');
const app = express();
app.get('/api/customers',(req,res) => {
  const customers = [
    {id:1, firstName : 'John', lastName : 'Doe'},
    {id:2, firstName : 'Matt', lastName : 'Man'},
    {id:3, firstName : 'Steve', lastName : 'Cook'}
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));