import locales from './locales'

class Currency
{
  constructor(amount) {
    this.amount = amount;
  }

  format(localLocale){
    const locale = locales[localLocale||Currency.locale]

    //round at most 2 decimal places.
    const value = Math.round((this.amount||0) * 100) / 100
    const intAndDecimal = value.toString().split('.').map(val => parseInt(val, 10))
    if(intAndDecimal.length == 1){
      intAndDecimal.push(0)
    }

    let result = '';

    if(locale.symbol.front){
      result += locale.symbol.val;
    }

    let int = intAndDecimal[0]
    //If there is no decimal delim setting, round decimals.
    if(locale.delim.decimal === undefined){
      if(intAndDecimal[1] >= 50){
        ++int;
      }
    }

    if(locale.delim.thousands !== undefined){
      result += int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delim.thousands);
    } else {
      result += int.toString();
    }

    if(locale.delim.decimal !== undefined){
      result += locale.delim.decimal + (intAndDecimal[1] < 10 ? intAndDecimal[1] + '0' : intAndDecimal[1]);
    }

    if(!locale.symbol.front){
      result += locale.symbol.val;
    }

    return result;
  }
}

const currency = (amount) => {
  return new Currency(amount)
}

currency.locale = (locale) => {
  Currency.locale = locale
}

//defualt locale
Currency.locale = 'en-us'

export default currency;
