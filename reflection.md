**The table for analyzing names according to chapter 2 in Clean Code "Meaningful Names"**
<table>
<tr>
<th>Namn och förklaring</th>
<th align="center">

**Reflektion och regler från Clean Code**
</th>
</tr>
<tr>
<td>

**getFormattedDatesWithEvents**

one of the longest funcs in module
</td>
<td align="center">

**Use Meaningful and Descriptive Names**

The naming of this function pretty much makes it self-explanatory and a comment would not be required to understand its purpose

**Seek Context in Names**

Instead of just mentioning dates, I specified formatted dates so the type of date referred to is clear.
</td>
</tr>
<tr>
<td>

**CustomDate**

name of a class in module
</td>
<td align="center">

**Differentiate Similar Names**

insted of calling it Date, I chose to call it CustomDate so the distinction between the two is made. The naming clearly shows that the object is custom made and not to be confused with the built in code object. This could also be an application of the "**Avoid Misleading Names**" rule

**Class Names Should Be Nouns**

the name of a class should be a noun that describes what the class represents
</td>
</tr>
<tr>
<td>

**isLeapYear**

boolean

method that returns boolean if leap year
</td>
<td align="center">

**Method names**

is clearly illustrates that a boolean is returned
</td>
</tr>
<tr>
<td>

**updateEvent**

method that updates an event
</td>
<td>

**Method Names Should Be Verbs**

the name of a method should be a verb describing what it does.
</td>
</tr>
<tr>
<td>

**currentDateTime**

variable in differenceindays function
</td>
<td>

**Prefer Long Descriptive Names Over Short, Cryptic Ones**

The longer name of this variable clearly shws that its a variable that contains the time of the current date.

**Avoid Mental Mapping**

time could have been described better in the naming since a user may not understand what time it refers to. User may think it refers to the time of the day while it's actually the stored time value in milliseconds since midnight, January 1, 1970 UTC.
</td>
</tr>
</table>

**The table for analyzing functions according to chapter 3 in Clean Code "functions"**

<table>
<tr>
<th>Metodnamn</th>
<th>antal rader (ej ws)</th>
<th align="center">

**Reflektion**
</th>
</tr>
<tr>
<td>

**sortDates()**
</td>
<td>23</td>
<td align="center">

**No Side Effects**

the funtion has two visible side effects, swapping and comparisons. Although they are well-contained I could make two separate functions one for swapping logic and one for comparisons.

**Error Handling Is Important but Should Not Obscure Logic**

No error handling inside the function but I used try-catch blocks to deal with errors more cleanly.
</td>
</tr>
<tr>
<td>

**getFormattedDatesWithEvents**

function that returns formatted dates with respective events
</td>
<td>13</td>
<td align="center">

**Use Descriptive Names for Functions**

the name describes the function well

**Do One Thing**

This function does more than one thing, it both collects the dates and events by pushing it into an array and then return the array. This could be solved by either making an attribute that has the value of array with dates and events or a new separate function that handles that logic to then be called upon.
</td>
</tr>
<tr>
<td>

**getLatestDateOfTwo(date2)**

Function that returnd the latest date of 2 dates
</td>
<td>11</td>
<td align="center">

**Command-query separation**

This function only makes a queries, no comman to change the state.

**Keep Functions at the Same Level of Detail**

It only calls functions on basically same level of detail
</td>
</tr>
<tr>
<td>

**differenceInDays(anotherDate)**

method that calculates the difference in days between two funcs and also returns the difference
</td>
<td>11</td>
<td>

**Function Length**

it is not overly long which increases readabilty and makes it more easily comprehensible.

**Refactor regularly**

This is a function that could easilt be reactored. I should separare command and query since it both calculates the difference and returns it.
</td>
</tr>
<tr>
<td>

**formatMonth(monthNumber)**

A function that formats month (ie takes 8 as argument and returns 08)
</td>
<td>

</td>
<td>

 **Avoid Nested Functions**

this function made it easier to avoid nesting in the format date function

**Use Local Variables for Temporary Data**

the month variable for example is only used locally since its only relevant to be used in the function calling upon it.
</td>
</tr>
</table>