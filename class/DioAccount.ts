export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.setBalance('deposito', valor)
      console.log('----------------------')
      console.log('=> Voce depositou: ' + valor)
      console.log('----------------------')
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus() && this.getBalance() > valor){
      this.setBalance('saque', valor)
      console.log('----------------------')
      console.log('Voce sacou: ' + valor)
      console.log('----------------------')
    } else {
      console.log('----------------------')
      console.log('=> Saldo insuficiente para saque de: ' + valor)
      console.log('----------------------')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (tipo: string, valor: number): number => {
    if (tipo === 'deposito') {
      this.balance += valor
    } else if (tipo ==='emprestimo') {
      if(this.validateStatus()){
        this.balance += valor
      }       
    } else if (tipo ==='saque') {
      this.balance -= valor
    }

    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('=> Conta inválida')
  }
}
