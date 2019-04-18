const {db,Customers,Accounts,Customer_account}=require('./db')
async function get()

  let item=await Customer_loan.findOne({
    include: [{ model: Loan_Customers},{
      model: Loan
     }],
    where:{id:1}})
  console.log(JSON.stringify("--------------->>>>>>"+item.balance+"-----------"))
}
get()




