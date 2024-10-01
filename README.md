# L2_modul
Modul för Laboration 2 i 1dv610.

  // Command: Sort all stored dates
  sortDates() {
    if (this.dates.length <= 1) {
      console.log('Not enough dates to sort.');
      return;
    }

    // Simple bubble sort with control flow statements
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < this.dates.length - 1; i++) {
        if (this.dates[i].getDate() > this.dates[i + 1].getDate()) {
          // Swap dates
          let temp = this.dates[i];
          this.dates[i] = this.dates[i + 1];
          this.dates[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    console.log('Dates have been sorted.');
  }

