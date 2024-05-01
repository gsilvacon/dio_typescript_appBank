import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
    if(this.setBalance('emprestimo', valor)) {
      console.log('-----------------------------')
      console.log('=> Voce pegou um empréstimo de: ' + valor)
      console.log('-----------------------------')
    }
  }
}
