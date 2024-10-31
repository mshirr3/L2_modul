import { DateManager } from "../src/DateManager.js"


// Testfall 1 - Creating customDate then saving it in Datemanager (SUCCESS)

const dateManager = new DateManager()
const date1 = new Date()
dateManager.createCustomDate(date1)

const customDate = dateManager.getCustomDate(date1)
// console.log(customDate)

// // Testfall 2 Setting events on customDate(SUCCESS)
const date3 = new Date('2015-10-11')
dateManager.createCustomDate(date3)
const customDate3 = dateManager.getCustomDate(date3)

customDate3.createEvent('New event')
customDate3.createEvent('New event2')
customDate3.createEvent('New event3')
const result3 = customDate3.getEvents()
// console.log(result3)

// Testfall 2.1 deleting an event(SUCCESS)
// customDate3.deleteEvent(1)
const resultat4 = customDate3.getEvents()
//  console.log(resultat4)


// Testfall 3 difference in days (SUCCESS)
const date5 = new Date('2010-10-01')
const date6 = new Date('2010-10-05')
dateManager.createCustomDate(date5)
const customDate5 = dateManager.getCustomDate(date5)
dateManager.createCustomDate(date6)
const customDate6 = dateManager.getCustomDate(date6)

const result6 = customDate5.differenceInDays(date6)
//    console.log(result6)

// Testfall 4 (SUCCESS)
const result7 = customDate5.getLatestDateOfTwo(date6)
//  console.log(result7)

// Testfall 5 (SUCCESS)
const events = customDate3.getEvents()
//  console.log(customDate3.getEvents())
const updatedEvent = 'updated event 2'
customDate3.updateEvent(1, updatedEvent)
// console.log(customDate3.getEvents())


// Testfall 7 sort the dates to the latest(SUCCESS)
// console.log('Unsorted dates')
// const allCustomDates = dateManager.getAllCustomDates()
// for (const customDate of allCustomDates) {
//     console.log(customDate.getDate())
// }

// dateManager.sortDates()

// console.log('Sorted dates')
// for (let i = 0; i < allCustomDates.length; i++) {
//     console.log(allCustomDates[i].getDate())
// }
