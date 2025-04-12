interface wallet {name: string, balance: number, id: string};

function logWallet(wallet: wallet) : void {
    console.log(wallet.name);
    console.log(wallet.balance);
    console.log(wallet.id);
}

const user1: wallet = {name: "user1", balance: 10000, id: "1"};
