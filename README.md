# Date-management
Module for Laboration 2 in 1dv610 at the linneaus university Kalmar, Sweden.

This a module that can be used for managin dates and events. It includes two classes with several functions to be called upon. 

## How to use the module
To acquire this module using ES modules

Assuming you're using es module, import like this:
**first get both classes**
``` javascript
import { CustomDate, DateManager } from 'date-managing'
```
then create an instance of customDate:
``` javascript
const date = new CustomDate(new Date())
```
you can now set events for this customDate like this:
``` javascript
date.setEvent('New event')
```

You can then save the customDate to dateManager to be managed:
``` javascript
const dateManager = new DateManager()
dateManager.saveCustomDate(date)
```
Use dateManager to basically save all your customDates with their events in one place

After saving two or more customDates to dateManager, you can check the difference in days between two dates:
``` javascript
const date2 = new CustomDate(new Date('2010-10-05'))
const result6 = date.differenceInDays(date2.date)
```
or get the latest date of two:
``` javascript
const latestDate = date.getLatestDateOfTwo(date2.date)
```
To see more ways to manage dates check out the testApp under the test catalogue.

