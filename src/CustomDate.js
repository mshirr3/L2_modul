/**
 * Class that represents dates with events.
 *
 */

export class CustomDate {
    #date
    #events

    constructor(date = new Date()) {
        this.validateDate(date)
        this.#date = date
        this.#events = []
    }

    validateDate(date) {
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

    #generateRandomId() {
        return Math.random().toString(36).substring(2, 6)
    }

    createEvent(event) {
        if (typeof event === 'string') {
            const theEvent = {}
            theEvent.eventText = event
            theEvent.id = this.#generateRandomId()
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
        return this.#events
    }

    deleteEvent(id) {
        const index = this.#events.findIndex(event => event.id === id)
        if (index !== -1) {
            this.#events.splice(index, 1)
        }
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
        this.validateDate(anotherDate)

        const currentDateTime = this.#getTimestamp(this.#date)
        const otherDateTime = this.#getTimestamp(anotherDate)

        const differenceInDays = this.#calculateDayDifference(currentDateTime, otherDateTime)

        return `${differenceInDays} days`

    }

    #getTimestamp(date) {
        return date.getTime()
    }

    #calculateDayDifference(time1, time2) {
        const differenceInTime = Math.abs(time2 - time1)
        return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))
    }

    getDate() {
        return this.#date
    }

    isPast() {
        const dateOfToday = new Date()
        return this.#date.getTime() < dateOfToday.getTime()
    }

    getLatestDateOfTwo(date2) {
        this.validateDate(date2)
        if (this.#date.getTime() < date2.getTime()) {
            return date2
        } else {
            return this.#date
        }
    }
}