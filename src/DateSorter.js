
export class DateSorter {
    #dates
    constructor (dates) {
        this.#dates = dates
    }

    sortDates () {
        try {
            this.#isLongEnoughToSort()
            this.#sortDatesCommand()
        } catch (error) {
            return error.message
        }
    }

    #sortDatesCommand () {
        let swapsNeeded
        do {
            swapsNeeded = this.#checkForSwaps()
            if (swapsNeeded) {
                this.#doSwaps()
            }
        } while (swapsNeeded)
    }

    #checkForSwaps () {
        for (let i = 0; i < this.#dates.length - 1; i++) {
            if (this.#areSwapsNeeded(this.#dates[i], this.#dates[i + 1])) {
                return true
            }
        }
        return false
    }

    #doSwaps () {
        for (let i = 0; i < this.#dates.length - 1; i++) {
            if (this.#areSwapsNeeded(this.#dates[i], this.#dates[i + 1])) {
                this.#swapDates(i)
            }
        }
    }

    #areSwapsNeeded (customDate1, customDate2) {
        const date1 = customDate1.getDate().getTime()
        const date2 = customDate2.getDate().getTime()
        return date1 > date2
    }

    #swapDates (index) {
        const temp = this.#dates[index]
        this.#dates[index] = this.#dates[index + 1]
        this.#dates[index + 1] = temp
    }

    #isLongEnoughToSort () {
        if (this.#dates.length < 2) {
            throw new Error ('Not enough dates to sort')
        }
    }
}