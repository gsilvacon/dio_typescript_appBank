import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

  // constructor(name: string, accountNumber: number){
  //   super(name, accountNumber)
  // }

  deposit = (valor: number): void => {
    this.setBalance('deposito', valor + 10)
    console.log('----------------------')
    console.log('=> Voce depositou: ' + (valor + 10))
    console.log('----------------------')
  }
}
