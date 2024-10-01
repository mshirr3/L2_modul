import { CustomDate } from "./CustomDate.js"

 const date1 = new CustomDate(new Date('2020-10-01'))
// const day = ('0' + date.getDate()).slice(-2)

const specificDate = new Date();
const formattedDate = Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).format(specificDate);

console.log(date1.getFormattedDate())
console.log(date1.isLeapYear());
