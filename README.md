# Date-management
Module for Laboration 2 in 1dv610 at the linneaus university Kalmar, Sweden.

This a module that can be used for managing dates and events. 

## How to use the module
To acquire this module using ES modules

Assuming you're using es module, import like this:
**first import class**
``` javascript
import {DateManager } from 'date-managing'
```
then create an instance of customDate:
``` javascript
const date = new Date()
dateManager.createCustomDate(date)
```
you can now create events for this customDate like this:
``` javascript
const customDate = dateManager.getCustomDate(date)
customDate.createEvent('New event')
```
Use dateManager to basically save all your customDates with their events in one place

After saving two or more customDates to dateManager, you can check the difference in days between two dates:
``` javascript
const date2 = new Date('2010-10-05')
dateManager.createCustomDate(date2)
const customDate2 = dateManager.getCustomDate(date2)
const result6 = customDate.differenceInDays(date2)
```
or get the latest date of two:
``` javascript
const latestDate = customDate.getLatestDateOfTwo(date2)
```
To see more ways to manage dates check out the testApp under the test catalogue.

