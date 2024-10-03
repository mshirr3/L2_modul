The table for analyzing names according to chapter 2 in Clean Code "Meaningful Names"
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
