import { CustomDate } from './CustomDate.js'
import { DateSorter } from './DateSorter.js'
/**
 * Class that manages CustomDate objects.
 *
 */

export class DateManager {
    constructor() {
        this.CustomDate = new CustomDate()
        this.dates = []
        this.datesWithEvents = []
    }

    saveCustomDate(customDate) {
        this.CustomDate.isCustomDate(customDate)
        this.dates.push(customDate)
    }

    // not really working
    #checkIfDatesWithEventsSaved() {
        if (!(this.dates.some(customDate => customDate.event !== undefined))) {
            throw new Error('No dates with event found')
        }
    }

    // Compares the two object by value not reference since reference is not relevant.
    isDateSaved(customDate) {
        for (const dateObj of this.dates) {
            if ((dateObj.date.getTime() === customDate.date.getTime()) && dateObj.event === customDate.event) {
                return true
            }
        }
        return false
    }

    saveDatesWithEvents() {
        let datesWithEvents = []
        for (let i = 0; i < this.dates.length; i++) {
            if (this.dates[i].events.length >= 1) {
                let events = this.dates[i].getEvents()
                let date = this.dates[i].getFormattedDate()
                datesWithEvents.push(` ${date}, ${events}`)
            }
        }
        this.datesWithEvents = datesWithEvents
    }

    getDatesWithEvents() {
        this.saveDatesWithEvents()
        return this.datesWithEvents

    }

    /**
     * Sorts dates from earliest to latest.
     *
     */
    sortDates () {
        const dateSorter = new DateSorter(this.dates)
        dateSorter.sortDates()
    }
}