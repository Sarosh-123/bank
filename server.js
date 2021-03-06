const express = require('express')
const app = express()
const { db,Accounts,Loan } = require('./db')
const session =  require('express-session')
const passport = require('./passport')

const {Products,CartItems}=require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: 'em2b462m4hb6v2j4hv5 23n4jv',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


// app.use('/products', (require('./routes/login').route))
app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/profile', (require('./routes/profile').route))
app.use('/withdraw', (require('./routes/withdraw').route))
app.use('/deposit', (require('./routes/deposit').route))
app.use('/transaction', (require('./routes/transaction').route))
app.use('/loanaccount', (require('./routes/loanaccount').route))
app.use('/loanlogin', (require('./routes/loanlogin').route))
app.use('/loansignup', (require('./routes/loansignup').route))
app.use('/Take_loan', (require('./routes/Take_loan').route))
app.use('/loan_deposit', (require('./routes/loan_deposit').route))
app.use('/admin_page', (require('./routes/admin_page').route))
app.use('/request', (require('./routes/request').route))

// app.use('/cart', (require('./routes/cart').route))

const port=process.env.PORT || 3000
app.get('/giveaccount',async (req,res)=>
{
  let item1=await Accounts.findOne({where:{id:req.user.id}})
  console.log("---------------------"+item1+">>>>>>>>>>>.")
  res.send(item1)
})
app.get('/giveloanno',async (req,res)=>
{
  let item1=await Loan.findOne({where:{id:req.user.id}})
  console.log("---------------------"+item1+">>>>>>>>>>>.")
  res.send(item1)
})

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log('Server started on http://localhost:3000')
    })
  })
.catch(console.error)