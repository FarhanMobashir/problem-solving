/*

 checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

* Currency Unit	Amount
? Penny	$0.01 (PENNY)
? Nickel	$0.05 (NICKEL)
? Dime	$0.1 (DIME)
? Quarter	$0.25 (QUARTER)
? Dollar	$1 (ONE)
? Five Dollars	$5 (FIVE)
? Ten Dollars	$10 (TEN)
? Twenty Dollars	$20 (TWENTY)
? One-hundred Dollars	$100 (ONE HUNDRED)

*/
function checkCashRegister(price, cash, cid) {
    let currency = {
        Penny: 0.01,
        Nickel: 0.05,
        Dime: 0.1,
        Quarter: 0.25,
        Dollar: 1,
        FiveDollars: 5,
        TenDollars: 10,
        TwentyDollars: 20,
        HundredDollar: 100
    }
    let change = cash - price;
    let result = { status: '', change: [] };
    console.log(change)
    while (change != 0) {
        if (change > currency.HundredDollar && cid[8][1] !== 0) {
            if (cid[8][1] < (Math.floor(change / currency.HundredDollar)) * currency.HundredDollar) {
                result.status = 'OPEN';
                result.change.push([cid[8][0], cid[8][1]])
                change = ((change % currency.HundredDollar) + (Math.floor(change / currency.HundredDollar) * currency.HundredDollar - cid[8][1])).toFixed(2)
                cid[8][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[8][0], Math.floor(change / currency.HundredDollar) * currency.HundredDollar])
                change = (change % currency.HundredDollar).toFixed(2);
            }
        }
        else if (change < currency.HundredDollar && change >= currency.TwentyDollars && cid[7][1] !== 0) {
            if (cid[7][1] < (Math.floor(change / currency.TwentyDollars)) * currency.TwentyDollars) {
                result.status = 'OPEN';
                result.change.push([cid[7][0], cid[7][1]])
                change = ((change % currency.TwentyDollars) + (Math.floor(change / currency.TwentyDollars) * currency.TwentyDollars - cid[7][1])).toFixed(2)
                cid[7][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[7][0], Math.floor(change / currency.TwentyDollars) * currency.TwentyDollars])
                change = (change % currency.TwentyDollars).toFixed(2);

            }
        }
        else if (change >= currency.TenDollars && cid[6][1] !== 0) {
            if (cid[6][1] < (Math.floor(change / currency.TenDollars)) * currency.TenDollars) {
                result.status = 'OPEN';
                result.change.push([cid[6][0], cid[6][1]])
                change = ((change % currency.TenDollars) + (Math.floor(change / currency.TenDollars) * currency.TenDollars - cid[6][1])).toFixed(2)
                cid[6][1] = 0;
            } else {
                result.status = 'OPEN';
                result.change.push([cid[6][0], Math.floor(change / currency.TenDollars) * currency.TenDollars])
                change = (change % currency.TenDollars).toFixed(2);

            }
        }
        else if (change >= currency.FiveDollars && cid[5][1] !== 0) {
            if (cid[5][1] < (Math.floor(change / currency.FiveDollars)) * currency.FiveDollars) {
                result.status = 'OPEN';
                result.change.push([cid[5][0], cid[5][1]])
                change = ((change % currency.FiveDollars) + (Math.floor(change / currency.FiveDollars) * currency.FiveDollars - cid[5][1])).toFixed(2)
                cid[5][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[5][0], Math.floor(change / currency.FiveDollars) * currency.FiveDollars])
                change = (change % currency.FiveDollars).toFixed(2);
            }
        }
        else if (change >= currency.Dollar && cid[4][1] !== 0) {
            if (cid[4][1] < (Math.floor(change / currency.Dollar)) * currency.Dollar) {
                result.status = 'OPEN';
                result.change.push([cid[4][0], cid[4][1]])
                change = ((change % currency.Dollar) + (Math.floor(change / currency.Dollar) * currency.Dollar - cid[4][1])).toFixed(2)
                cid[4][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[4][0], Math.floor(change / currency.Dollar) * currency.Dollar])
                change = (change % currency.Dollar).toFixed(2);
            }
        }
        else if (change >= currency.Quarter && cid[3][1] !== 0) {
            if (cid[3][1] < (Math.floor(change / currency.Quarter)) * currency.Quarter) {
                result.status = 'OPEN';
                result.change.push([cid[3][0], cid[3][1]])
                change = ((change % currency.Quarter) + (Math.floor(change / currency.Quarter) * currency.Quarter - cid[3][1])).toFixed(2)
                cid[3][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[3][0], Math.floor(change / currency.Quarter) * currency.Quarter])
                change = (change % currency.Quarter).toFixed(2);
            }

        }
        else if (change >= currency.Dime && cid[2][1] !== 0) {
            if (cid[2][1] < (Math.floor(change / currency.Dime)) * currency.Dime) {
                result.status = 'OPEN';
                result.change.push([cid[2][0], cid[2][1]])
                change = ((change % currency.Dime) + (Math.floor(change / currency.Dime) * currency.Dime - cid[2][1])).toFixed(2)
                cid[2][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[2][0], Math.floor(change / currency.Dime) * currency.Dime])
                change = (change % currency.Dime).toFixed(2);
            }
        }
        else if (change >= currency.Nickel && cid[1][1] !== 0) {
            if (cid[1][1] < (Math.floor(change / currency.Nickel)) * currency.Nickel) {
                result.status = 'OPEN';
                result.change.push([cid[1][0], cid[1][1]])
                change = ((change % currency.Nickel) + (Math.floor(change / currency.Nickel) * currency.Nickel - cid[1][1])).toFixed(2)
                cid[1][1] = 0;

            } else {
                result.status = 'OPEN';
                result.change.push([cid[1][0], Math.floor(change / currency.Nickel) * currency.Nickel])
                change = (change % currency.Nickel).toFixed(2);
            }

        }
        else if (change >= currency.Penny && cid[0][1] !== 0) {
            if (cid[0][1] < (Math.floor(change / currency.Penny)) * currency.Penny) {
                result.status = 'OPEN';
                result.change.push([cid[0][0], cid[0][1]])
                change = ((change % currency.Penny) + (Math.floor(change / currency.Penny) * currency.Penny - cid[0][1])).toFixed(2)
                cid[0][1] = 0;

            }
            else {
                result.status = 'OPEN';
                result.change.push([cid[0][0], Math.floor(change / currency.Penny) * currency.Penny])
                change = (change % currency.Penny).toFixed(2);
            }

        }

    }
    console.log(change);
    return result;
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}