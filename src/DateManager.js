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

    saveDate(newCustomDate) {
        this.CustomDate.isCustomDate(newCustomDate)
        this.dates.push(newCustomDate)
    }

    checkIfDatesSaved() {
        try {
            if (this.dates.length === 0) {
                throw new Error('No dates found')
            } else {

            }
        } catch (error) {
            return error.message
        }

    }

    checkIfDatesWithEventsSaved() {
        if (!(this.dates.some(customDate => customDate.event !== undefined))) {
            throw new Error('No dates with event found')
        }
    }

    // Compares the two object by value not reference since reference is not relevant.
    isDateSaved (customDate) {
        for (const dateObj of this.dates) {
            if ((dateObj.date.getTime() === customDate.date.getTime()) && dateObj.event === customDate.event) {
                return true
            }
        }
        return false
    }

    getDatesWithEvents() {
        try {
            this.checkIfDatesSaved()
            this.checkIfDatesWithEventsSaved()
            for (let i = 0; i < this.dates.length; i++) {
                if (this.dates[i].event) {
                    let event = this.CustomDate.getEventForCustomDate(this.dates[i])
                    let date = this.CustomDate.getFormattedDate()
                    return `Event: ${event}, ${date}`
                }
            }
        } catch (error) {
            return error.message
        }
    }

    sortDates() {
        let swapped
        do {
            swapped = false
            for (let i = 0; i < this.dates.length - 1; i++) {
                
            }
        }
    }
}