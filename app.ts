import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'admin', 10)
console.log('---------------------------------------')
console.log(peopleAccount)
peopleAccount.deposit(10)
console.log(peopleAccount)
peopleAccount.withdraw(5)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('---------------------------------------')
console.log(companyAccount)
companyAccount.deposit(20)
console.log(companyAccount)
companyAccount.withdraw(10)
console.log(companyAccount)
companyAccount.getLoan(50)
console.log(companyAccount)

const studentAccount: StudentAccount = new StudentAccount('Pedro', 30)
console.log('---------------------------------------')
console.log(studentAccount)
studentAccount.deposit(30)
console.log(studentAccount)
studentAccount.withdraw(20)
console.log(studentAccount)
studentAccount.withdraw(50)
console.log(studentAccount)