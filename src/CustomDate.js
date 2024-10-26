/**
 * Class that represents dates with events.
 *
 */

export class CustomDate {
    #date
    #events

    constructor(date = new Date()) {
        this.isDate(date)
        this.#date = date
        this.#events = []
    }

    isDate(date) {
        if (!(date instanceof Date)) {
            throw new Error('Input must be a date object (not CustomDate)')
        }
    }

    #isCustomDate(customDate) {
        if (!(customDate instanceof CustomDate)) {
            throw new Error('Must be instance of custom date class')
        }
    }

    /**
     * Formats the date as year-month-day
     *
     * @returns {string} the formatted date
     */
    getFormattedDate() {
        const year = this.#date.getFullYear()
        const month = this.#formatMonth(this.#date.getMonth())
        const day = ('0' + this.#date.getDate()).slice(-2)

        return `${year}-${month}-${day}`
    }

    #formatMonth(monthNumber) {
        let month
        let correctMonthNumber = monthNumber + 1 // getMonth() returns the previous month so we add 1,
        if (correctMonthNumber < 10) {
            month = '0' + correctMonthNumber
        } else {
            month = correctMonthNumber.toString()
        }
        return month
    }

    isLeapYear() {
        const year = this.#date.getFullYear()
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    createEvent(event) {
        if (typeof event === 'string') {
            const theEvent = {}
            theEvent.eventText = event
            theEvent.id = this.#events.length // if length = 0 then id = 0, which is also the corresponding index
            this.#events.push(theEvent)
        } else {
            throw new Error('Event argument must be a string')
        }
    }

    getEvent(id) {
        const event = this.#events[id]
        return event
    }

    getEvents() {
        if (this.#events.length > 0) {
            return this.#events
        } else {
            throw new Error('No events for this date found')
        }
    }

    deleteEvent(id) {
        // the id corresponds to index of event
        const index = id
        this.#events.splice(index, 1)
    }

    updateEvent(id, updatedEvent) {
        const currentEvent = this.getEvent(id)
        currentEvent.eventText = updatedEvent
    }

    /**
     * 
     * @param {Date} anotherDate - a date object to compare two dates
     * @returns {string} difference in days
     */
    differenceInDays(anotherDate) {
        try {
            this.isDate(anotherDate)
            const currentDateTime = this.#date.getTime()
            const otherDateTime = anotherDate.getTime()

            const diffTime = Math.abs(otherDateTime - currentDateTime)

            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            return `${diffDays} days`
        } catch (error) {
            return error.message
        }
    }

    getDate() {
        return this.#date
    }

    isPast() {
        const dateOfToday = new Date()
        return this.#date.getTime() < dateOfToday.getTime()
    }

    getLatestDateOfTwo(date2) {
        try {
            this.isDate(date2)
            if (this.#date.getTime() < date2.getTime()) {
                return date2
            } else {
                return this.#date
            }
        } catch (error) {
            return error.message
        }
    }
}