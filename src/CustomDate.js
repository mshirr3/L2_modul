/**
 * Class that represents a date.
 *
 */

export class CustomDate {
    constructor(date = new Date()) {
        this.isDate(date)
        this.date = date
    }

    isDate(date) {
        try {
            if (!(date instanceof Date)) {
                throw new Error('Input must be a date object')
            }
        } catch (error) {
            return error.message
        }
    }

    isCustomDate(customDate) {
        try {
            if (!(customDate instanceof CustomDate)) {
                throw new Error('Must be instance of custom date class')
            }
        } catch (error) {
            return error.message
        }
    }

    getFormattedDate() {
        const year = this.date.getFullYear()
        const month = this.formatMonth(this.date.getMonth())
        const day = ('0' + this.date.getDate()).slice(-2)

        return `${year}-${month}-${day}`
    }

    formatMonth(monthNumber) {
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
        const year = this.date.getFullYear()
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    setNewDate(newDate) {
        this.isDate(newDate)
        this.date = newDate
    }

    addEventAsString(event) {
        if (typeof event === 'string') {
            this.event = event
        }
    }

    deleteEvent () {
        this.isCustomDate()
        delete this.event
    }

    getEventForCustomDate(CustomDate) {
        this.isCustomDate(CustomDate)

        if (CustomDate.event) {
            return CustomDate.event
        } else {
            return 'No event at this date'
        }
    }

    differenceInDays (anotherDate) {
        this.isDate()
        const currentDate = this.date.getDate()
        const otherDate = anotherDate.getDate()
        const diffTime = Math.abs(otherDate - currentDate)
        return Math.ceil(diffTime / 1000 * 60 *60 * 24) + ' days'
    }

    isPast() {
        const dateOfToday = new Date()
        return this.date.getTime() < dateOfToday.getTime()
    }

    checkEa

}