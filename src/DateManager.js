import { CustomDate } from './CustomDate.js'
import { DateSorter } from './DateSorter.js'
/**
 * Class that manages CustomDate objects.
 *
 */

export class DateManager {
    #customDates
    #customDatesWithEvents
    constructor() {
        this.#customDates = []
        this.#customDatesWithEvents = []
    }

    createCustomDate(date) {
        if (!(this.isDateSaved(date))) {
            const customDate = new CustomDate(date)
            this.#customDates.push(customDate)
        } else {
            throw new Error('Custom date with this date already exists')
        }
    }

    getCustomDate(dateToGet) {
        if (this.isDateSaved(dateToGet)) {
            for (const customDate of this.#customDates) {
                const savedDate = customDate.getDate()
                if (this.#isSameDate(savedDate, dateToGet)) {
                    return customDate
                }
            }
        }
    }

    #isSameDate(date1, date2) {
        if (date1.getTime() === date2.getTime()) {
            return true
        } else {
            false
        }
    }

    // Compares the two object by value not reference since reference is not relevant.
    isDateSaved(dateToCheck) {
        for (const customDate of this.#customDates) {
            const savedDate = customDate.getDate()
            if (!(customDate.isDate(dateToCheck)) && this.#isSameDate(savedDate, dateToCheck)) {
                return true
            }
        }
        return false
    }

    getAllCustomDates() {
        return this.#customDates
    }

    #saveCustomDatesWithEvents() {
        for (const customDate of this.#customDates) {
            const events = customDate.getEvents()
            if (events.length > 0) {
                this.#customDatesWithEvents.push(customDate)
            }
        }
    }

    getCustomDatesWithEvents() {
        this.#saveCustomDatesWithEvents()
        if (this.#customDatesWithEvents.length > 0) {
            return this.#customDatesWithEvents
        } else {
            throw new Error('No events registered')
        }
    }

    /**
     * Sorts dates from earliest to latest.
     *
     */
    sortDates() {
        const dates = this.getAllCustomDates()
        const dateSorter = new DateSorter(dates)
        dateSorter.sortDates()
    }
}