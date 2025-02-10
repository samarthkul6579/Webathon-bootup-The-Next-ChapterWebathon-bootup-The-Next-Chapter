// Write a function that takes an input of item prices and returns the total bill.

itemPrices =[42,85,94,87,63]
function calculateTotalBill(itemPrices) {
    let totalBill = 0;
    for (let price of itemPrices) {
        totalBill += price;
    }
    return totalBill;
}

