var DebitAccount = /** @class */ (function () {
    function DebitAccount(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    DebitAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log("\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 ".concat(this.accountNumber, ". \u0421\u0443\u043C\u043C\u0430: ").concat(amount, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance));
    };
    DebitAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        if (amount > this.balance) {
            console.log("\u041E\u0442\u043A\u0430\u0437. \u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 ".concat(this.accountNumber, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance));
            return;
        }
        this.balance -= amount;
        console.log("\u0421\u043D\u044F\u0442\u0438\u0435 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ".concat(amount, " \u0441 \u043A\u0430\u0440\u0442\u044B ").concat(this.accountNumber, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance));
    };
    DebitAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return DebitAccount;
}());
var CreditAccount = /** @class */ (function () {
    function CreditAccount(accountNumber, creditLimit) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.creditLimit = creditLimit;
    }
    CreditAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        this.balance += amount;
        console.log("\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 ".concat(this.accountNumber, ". \u0421\u0443\u043C\u043C\u0430: ").concat(amount, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance));
    };
    CreditAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Сумма должна быть положительной.");
            return;
        }
        if (this.balance + this.creditLimit < amount) {
            console.log("\u041E\u0442\u043A\u0430\u0437. \u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 ".concat(this.accountNumber, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance, ", \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E: ").concat(this.creditLimit));
            return;
        }
        this.balance -= amount;
        console.log("\u0421\u043D\u044F\u0442\u0438\u0435 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ".concat(amount, " \u0441 \u043A\u0430\u0440\u0442\u044B ").concat(this.accountNumber, ". \u0411\u0430\u043B\u0430\u043D\u0441: ").concat(this.balance));
    };
    CreditAccount.prototype.getBalance = function () {
        return this.balance;
    };
    CreditAccount.prototype.getDebt = function () {
        return this.balance < 0 ? Math.abs(this.balance) : 0;
    };
    return CreditAccount;
}());
var debitAccount = new DebitAccount("Tinkoff-Black");
debitAccount.deposit(5000);
debitAccount.withdraw(2000);
console.log("\u0411\u0430\u043B\u0430\u043D\u0441 \u0434\u0435\u0431\u0435\u0442\u043E\u0432\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430: ".concat(debitAccount.getBalance()));
var creditAccount = new CreditAccount("Tinkoff-Platinum", 150000);
creditAccount.deposit(1999);
creditAccount.withdraw(70000);
console.log("\u0411\u0430\u043B\u0430\u043D\u0441 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430: ".concat(creditAccount.getBalance()));
console.log("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0434\u043E\u043B\u0433 \u043F\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u043C\u0443 \u0441\u0447\u0435\u0442\u0443: ".concat(creditAccount.getDebt()));
creditAccount.withdraw(30000);
