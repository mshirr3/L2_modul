import { CustomDate } from './CustomDate.js'
/**
 * Class that represents a date.
 *
 */

export class DateManager {
    constructor() {
        this.CustomDate = new CustomDate()
        this.dates = []
    }

    saveCustomDate(newCustomDate) {
        this.CustomDate.isCustomDate(newCustomDate)
        this.dates.push(newCustomDate)
    }

    // not really working
    checkIfDatesWithEventsSaved() {
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

    getFormattedDatesWithEvents() {
        let datesWithEvents = []
        for (let i = 0; i < this.dates.length; i++) {
            try {
                if (this.dates[i].events.length >= 1) {
                    let events = this.dates[i].getEvents()
                    let date = this.dates[i].getFormattedDate()
                    datesWithEvents.push(` ${date}, ${events}`)
                }
            } catch (error) {
                return error.message
            }
        }
        return datesWithEvents
    }

    #isLongEnoughToSort() {
        if (this.dates.length <= 1) {
            throw new Error('Not enough dates to sort')
        } else return true
    }

    /**
     * Sorts dates from earliest to latest.
     *
     */
    sortDates() {
        try {
            this.#isLongEnoughToSort()
            let swapped
            do {
                swapped = false
                for (let i = 0; i < this.dates.length - 1; i++) {
                    const customDate1 = this.dates[i]
                    const customDate2 = this.dates[i + 1]
                    const dateOfCustomDate1 = customDate1.date.getTime() // Convert to timestamp
                    const dateOfCustomDate2 = customDate2.date.getTime()  // Convert to timestamp
                    // If date1 is greater than date2, swap them
                    if (dateOfCustomDate1 > dateOfCustomDate2) {
                        let temp = this.dates[i]
                        this.dates[i] = this.dates[i + 1]
                        this.dates[i + 1] = temp
                        swapped = true
                    }
                }
            } while (swapped)
        } catch (error) {
            return error.message
        }

    }
}