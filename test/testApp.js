import { DateManager } from "../src/DateManager.js"
import { CustomDate } from "../src/CustomDate.js"

// Testfall 1 - (SUCCESS)
const date1 = new CustomDate(new Date('2020-10-01'))
const dateManager = new DateManager()

dateManager.saveDate(date1)
const result = dateManager.isDateSaved(date1)
// console.log(result)

// Testfall 2 (SUCCESS)
const date2 = new CustomDate(new Date('2002-10-01'))
const result2 = dateManager.isDateSaved(date2)
console.log(result2)

// Testfall 2

