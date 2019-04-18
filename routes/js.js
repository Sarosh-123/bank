 const {Loan,Customer_loan,Loan_Customers}=require('../db')
 async function get()
 {
 let item1=await Customer_loan.findOne(
      { include: [{ model: Loan_Customers},{
        model: Loan
       }],
          where:{loan_id:1}})
          console.log(JSON.stringify(item1))
 }
 get()
