const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());

const user = [
    {id: 01, name: 'sadakat', email: 'hossain.sadakat@gm.com'},
    {id: 02, name: 'hossain', email: 'hossain.sadakat@gm.com'},
    {id: 03, name: 'srabon', email: 'hossain.sadakat@gm.com'},
    {id: 04, name: 'blackman', email: 'hossain.sadakat@gm.com'}
]

app.get('/', (req, res) =>{
    res.send('User management server is running')
})
app.get('/user', (req, res)=>{
    res.send(user);
})
app.post('/user', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
})
app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`)
})