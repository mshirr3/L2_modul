import { CustomDate } from "./CustomDate.js"
import { DateManager } from "./DateManager.js"

 const date1 = new CustomDate(new Date('2028-10-01'))
 const date2 = new CustomDate(new Date('2030-08-02'))
// const day = ('0' + date.getDate()).slice(-2)
const dateManager = new DateManager()


// dateManager.saveDate(new CustomDate(new Date('2020-08-2')))
// dateManager.saveDate(date1)
// date1.addEventAsString('Did I do something?')
// console.log(dateManager.getDatesWithEvents())
// date1.deleteEvent()
console.log(date2.isPast())