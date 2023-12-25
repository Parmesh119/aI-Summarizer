import express from 'express'
import Main_Schema from './schema.js'
import './connection.js'
const app = express()
app.use(express.json());
import cookieParser from 'cookieparser'
app.use(cookieParser());
app.post('/', async (req, res) => {
    try{
        const main = await Main_Schema.findOne({user: req.body.user })
        if(main) {
            const result = (req.body.password + 'thisismysecrctekeyfhrgfgrfrty84fwir767') === main.passowrd
            if (result) {
                res.status(200).json({success :"Successfully logged in."})
              } else {
                res.status(400).json({ error: "password doesn't match" });
              }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    }catch(error) {
        throw new Error(error.message)
    }finally{
        alert('Error is there. Not able to login.')
        res.exit(1)
    }
})

app.post('/register', async (req, res) => {
    let passhash = req.body.Password + 'thisismysecrctekeyfhrgfgrfrty84fwir767';
    try{
        const new_main = new Main_Schema({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            user: req.body.user,
            email: req.body.email,
            password: passhash
        })
        if(req.body.confirmPassword === passhash) {
            await new_main.save()
            res.cookie('Main_Schema', new_main)
            res.status(200).json({success: "user created"})
        }else{
            throw new Error('Passwords do not match')
        }
    }catch(error) {
        throw new Error(error.message)
    }finally{
        alert('Error is there')
        res.redirect('/')
    }
})
app.listen(5000, () => {
    console.log('server started on port 5000')
})