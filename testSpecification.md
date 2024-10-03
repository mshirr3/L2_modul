Testspecifikation – L2 1dv610 

Syftet med denna specifikation är att dokumentera alla testfall för min modul ‘Dates-mangement’. Det är en modul med två klasser CustomDate och DateManager. CustomDate klassen innehåller flera funktioner som kan användas till att kolla om ett år är ett skottår eller jämföra två datum för att ta reda på det senaste. CustomDate har en event-attribut som man kan lägga till etc. I Datemanagement klassen kan man spara dessa customdates instanser i en array och göra en get på alla datum med events, sortera etc. Dessa testfall kommer testat i en testapp i testkatalogen för projektet. 

 

Testfall 1 Spara ett custom-date objekt 

Spara ett custom-date-objekt i dates arrayen i Date-manager-objekt. 

Input 

    Skapa ett custom-date- och date-managerobjekt 

    Spara custom-date genom saveCustomDate-funktionen på date-manager 

    Använd isDatesaved för att kolla om sparad 

    Logga ut resultatet 

Output 

    True loggas ut på konsolen 

Testfall 1.1 Osparat custom-date objekt 

    Gör ett nytt custom-date objekt och spara som tidigare 

    Checka ifall sparad med isDatesaved 

    Logga ut 

Output 

    False loggas ut 

Testfall 2 Lägg till flera events på customDate-objekt 

Input 

    Skapa ett customDateobjekt 

    Anropa setEvent funktion för att lägga till events ('new event1’), ('new event3’), ('new event2’) 

    Anropa getEvents och spara resultat i variabel 

    Logga ut resultat 

Output 

    Events loggas ut i konsolen 

Testfall 2.1 Radera event 

Radera event från custom date objektet 

Input 

    Anropa getevents för att få tillbaka id för eventet: ‘new event2’ 

    Radera eventet med deleteEvent(id) 

    Anropa getevents funktion och spara värdet i variabel 

    Logga ut resultatet 

Output 

    ‘New event2’ är borta 

 

Testfall 2.2 Get event när inga event lagts till 

Input 

    Testfall 2 

 

Output  

    ‘No event found for this date’ returneras 

 

Testfall 3 Checka skillnaden mellan två datum 

Checka skillnaden i dagar mellan två olika datum 

Input  

    Skapa två customDate objekt med olika datum (2010-10-05 och 2020-10-01) 

    Anropa differenceindays metoden på ett av objekten och skicka in ett av värdet av ett av date attributen som argument (customDate.date) 

    Spara det returnerade värde i variabel och logga ut 

Output 

    Skillnaden i dagar (4 dagar) loggas ut 

 

Testfall 4 Ta reda på det senaste datumet av två 

Input 

    Anropa latestDateofTwo på ett customdate objekt och skicka in ett annat som argument (2010-10-05 och 2020-10-01)  

    Spara det returnerade värdet i variabel och logga ut 

Output 

    Det senaste datumet loggas ut (2020-10-05)  

 

Testfall 5 Update event 

Uppdatera ett redan skapat event 

Input 

    Skapa 3 events som i testfall 2  och spara de med setEvent 

    GetEvents för att ta reda på id av det specifika eventet (new Event2), logga ut alla events 

    Uppdatera eventet med updateEvent, nya eventet blir ‘updated event 2’ 

    Logga ut alla events 

Output 

    Eventet uppdateras och visar ‘updated event 2’ 

 

Testfall 6 Get bara dates med events 

Hämtar endast customDates med sparade event 

Input 

    Skapa 3+ Customdates och lägg till event, och ett CustomDate objekt utan event 

    Anropa getFormattedDatesWithEvents 

    Logga ut resultat 

Output 

    Endast customDates med events loggas ut 

 

Testfall 7 Sortera dates-arrayen 

Sortera alla sparade customDates i dates-arrayen i DateManager 

Input 

    Skapa 3+ customdate objekt och lägg till event för varje 

    spara alla som i testfall 1 fast inte med datum i ordning från tidigaste till senaste 

    Anropa getFormattedDatesWithEvents och logga ut resultatet 

    Sortera med sortDates 

    Anropa getFormattedDatesWithEvents igen och logga ut 

Output 

    I första arrayen är datumen inte sorterade 

    I andra arrayen är de sorterade 
