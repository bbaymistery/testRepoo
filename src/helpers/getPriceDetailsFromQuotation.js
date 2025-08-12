export function getPriceDetailsFromQuotation(params = { 'quotation': Object(), "qtype": Number() }, options = {}) {
  try {
    let { quotation, qtype = 1 } = params;
    let price = null;
    let normalPrice = null;

    if (quotation.normalPrice === quotation.price) {
      price = quotation.price;
      normalPrice = quotation.normalPrice;

    } else {
      if (quotation.currencyId !== quotation.exchangedCurrencyId && (qtype === 1 || qtype === 2)) {
        price = quotation.exchangedPrice;
        normalPrice = quotation.normalExchangedPrice;
      } else {
        price = quotation.price;
        normalPrice = quotation.normalPrice;

      }
    }
    //
    return { 'status': 200, 'data': { 'price': parseFloat(price), 'normalPrice': parseFloat(normalPrice) } };
  } catch (error) {
    return { 'status': 500, 'data': error };
  }

}

const main = { getPriceDetailsFromQuotation }

export default main;