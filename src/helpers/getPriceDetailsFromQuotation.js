export function getPriceDetailsFromQuotation(params = { 'quotation': Object(), "qtype": Number() }, options = {}) {
  try {
    let { quotation, qtype = 1 } = params;
    let price = null;//total price
    let normalPrice = null;//price-amountOfVat  means net price
    let amountOfVAT = 0;
    if ((+quotation.normalPrice + quotation.amountOfVAT) === +quotation.price) {

      price = quotation.price;
      normalPrice = quotation.normalPrice;
      amountOfVAT = quotation.amountOfVAT || 0
    } else {
      if (quotation.currencyId !== quotation.exchangedCurrencyId && (qtype === 1 || qtype === 2)) { // 3:taxi-deals  4:tours 1:prices 2:price-markups
        price = quotation.exchangedPrice;
        normalPrice = quotation.normalExchangedPrice;
        amountOfVAT = quotation.exchangedAmountOfVAT || 0
      } else {
        price = quotation.price;
        normalPrice = quotation.normalPrice;
        amountOfVAT = quotation.amountOfVAT || 0
      }
    }



    return { 'status': 200, 'data': { 'price': parseFloat(price), 'normalPrice': parseFloat(normalPrice), 'amountOfVAT': parseFloat(amountOfVAT) }, };
  } catch (error) {
    return { 'status': 500, 'data': error };
  }

}

const main = { getPriceDetailsFromQuotation }

export default main;