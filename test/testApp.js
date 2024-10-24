import { DateManager } from "../src/DateManager.js"
import { CustomDate } from "../src/CustomDate.js"

// Testfall 1 - Creating customDate then saving it in Datemanager (SUCCESS)
const date1 = new CustomDate(new Date())
const dateManager = new DateManager()

dateManager.saveCustomDate(date1)
const result = dateManager.isDateSaved(date1)
// console.log(result)

// Testfall 1.1 Not saving it to Datemanager(SUCCESS)
const date2 = new CustomDate(new Date('2024-05-07'))
const result2 = dateManager.isDateSaved(date2)
// console.log(result2)

// Testfall 2 Setting events on customDate(SUCCESS) 
const date3 = new CustomDate(new Date('2013-12-15'))
date3.setEvent('New event')
date3.setEvent('New event2')
date3.setEvent('New event3')
const result3 = date3.getEvents()
//  console.log(result3)

// Testfall 2.1 deleting an event(SUCCESS)
// date3.deleteEvent(1)
const resultat4 = date3.getEvents()
// console.log(resultat4)


// Testfall 2.2 no events set, error scenarion(SUCCESS)
const date4 = new CustomDate(new Date('2029-10-01'))
// const result5 = date4.getEvents()
// console.log(result5)

// Testfall 3 difference in days (SUCCESS)
const date5 = new CustomDate(new Date('2010-10-01'))
const date6 = new CustomDate(new Date('2010-10-05'))

const result6 = date5.differenceInDays(date6.date)
// console.log(result6)

// Testfall 4 (SUCCESS)
const result7 = date5.getLatestDateOfTwo(date6.date)
//  console.log(result7)

// Testfall 5 (SUCCESS)
const events = date3.getEvents()
// console.log(date3.getEvents())
const updatedEvent = 'updated event 2'
date3.updateEvent(1, updatedEvent)
//  console.log(date3.getEvents())

// Testfall 6 get dates with events(SUCCESS)
date5.setEvent('Sleep early')
date5.setEvent('Cook food')
date6.setEvent('Study diligently')
date6.setEvent('Take a shower')

dateManager.saveCustomDate(date6)
dateManager.saveCustomDate(date5)
// console.log(dateManager.getDatesWithEvents())

// Testfall 7 sort the dates to the latest(SUCCESS)
// dateManager.saveCustomDate(date3)
// dateManager.saveCustomDate(date4)
// console.log('Unsorted dates')
// console.log(dateManager.getDatesWithEvents())
// dateManager.sortDates()
// console.log('Sorted dates')
// console.log(dateManager.getDatesWithEvents())
