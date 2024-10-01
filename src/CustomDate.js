/**
 * Class that represents a date.
 *
 */

export class CustomDate {
    constructor(date = new Date()) {
        this.dateError(date)
        this.date = date
    }

    dateError(date) {
        if (!(date instanceof Date)) {
            throw new Error('Input must be a date object')
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

    isLeapYear () {
        const year = this.date.getFullYear()
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }


}