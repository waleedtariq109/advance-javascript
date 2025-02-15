"use strict";

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `$${amount} is deposited to your Acc: ${this.accountNumber}.  You current balance is: $${this.balance}.`
    );
  }

  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error("Insufficient Funds");
    }
    this.balance -= amount;
    console.log(
      `$${amount} has been withdrawl from your Acc: ${this.accountNumber}. You current balance is: $${this.balance}.`
    );
  }
}

const account = new BankAccount("0107954219", "Waleed Tariq", 800);

console.log(account);

account.withdraw(200);
account.deposit(120);
