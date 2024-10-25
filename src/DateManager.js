import { CustomDate } from './CustomDate.js'
import { DateSorter } from './DateSorter.js'
/**
 * Class that manages CustomDate objects.
 *
 */

export class DateManager {
    #dates
    constructor() {
        this.#dates = []
    }

    createCustomDate (date) {
        if (!(this.isDateSaved(date))) {
           const customDate = new CustomDate(date)
           this.#dates.push(customDate)
        } else {
            throw new Error('Custom date with this date already exists')
        }
    }

    getCustomDate(date) {
        if (this.isDateSaved(date)) {
            for (const customDate of this.#dates) {
                const savedDate = customDate.getDate()
                if (savedDate.getTime() === date.getTime()) {
                    return customDate
                }
            }
            throw new Error('No custom date for this date')
        }
    }

    // Compares the two object by value not reference since reference is not relevant.
    isDateSaved(date) {
        for (const customDate of this.#dates) {
            const savedDate = customDate.getDate()
            if (!(customDate.isDate(date)) && savedDate.getTime() === date.getTime()) {
                return true
            }
        }
        return false
    }


    getAllCustomDates() {
        return this.#dates
    }

    /**
     * Sorts dates from earliest to latest.
     *
     */
    sortDates () {
        const dates = this.getAllCustomDates()
        const dateSorter = new DateSorter(dates)
        dateSorter.sortDates()
    }
}