interface BankAccount {
    accountNumber: string;
    balance: number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}

class DebitAccount implements BankAccount {
    accountNumber: string;
    balance: number;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log(`Пополнение ${this.accountNumber}. Сумма: ${amount}. Баланс: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        if (amount > this.balance) {
            console.log(`Отказ. Недостаточно средств ${this.accountNumber}. Баланс: ${this.balance}`);
            return;
        }
        this.balance -= amount;
        console.log(`Снятие на сумму ${amount} с карты ${this.accountNumber}. Баланс: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}

class CreditAccount implements BankAccount {
    accountNumber: string;
    balance: number;
    creditLimit: number;

    constructor(accountNumber: string, creditLimit: number) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.creditLimit = creditLimit;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log(`Пополнение ${this.accountNumber}. Сумма: ${amount}. Баланс: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        if (this.balance + this.creditLimit < amount) {
            console.log(`Отказ. Недостаточно средств ${this.accountNumber}. Баланс: ${this.balance}, доступно: ${this.creditLimit}`);
            return;
        }
        this.balance -= amount;
        console.log(`Снятие на сумму ${amount} с карты ${this.accountNumber}. Баланс: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }

    getDebt(): number {
        return this.balance < 0 ? Math.abs(this.balance) : 0;
    }
}

const debitAccount = new DebitAccount("Tinkoff-Black");
debitAccount.deposit(5000);
debitAccount.withdraw(2000);
console.log(`Баланс дебетового счета: ${debitAccount.getBalance()}`);

const creditAccount = new CreditAccount("Tinkoff-Platinum", 150000);
creditAccount.deposit(1999);
creditAccount.withdraw(70000);
console.log(`Баланс кредитного счета: ${creditAccount.getBalance()}`);
console.log(`Текущий долг по кредитному счету: ${creditAccount.getDebt()}`);
creditAccount.withdraw(30000);