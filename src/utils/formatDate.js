const formateDate = (date, locale, options) => { new Intl.DateTimeFormat(locale, options).format(date) }
// formateDate(new Date() , 'es') // 5/1/2022
// formateDate(new Date() , 'es', {timeStyle, 'long'}) // 5 de enero de 2022
// formateDate(new Date() , 'es', {timeStyle, 'short'}) // 14:54