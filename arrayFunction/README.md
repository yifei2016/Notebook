Lägg till i början		kungar.unshift('Karl XII');
Lägg till i slutet		kungar.push('Gustav IV Adolf');
Ta bort i början		kungar.shift();
Ta bort i slutet		kungar.pop();

Ta bort x antal element från och med position y
				kungar.splice(y,x);

Kopiera en array		var kungsKopia = kungar.slice();
(Slice tar vanligen två parametrar, början och slutelement som ska kopieras från en array. Det påverkar inte orginalarrayen.
Utelämnar man dessa så kopieras hela arrayen.)


let a = ['joke','jack']
a.join('') //'jokejack'
a.join(',')//'joke,jack'


forEach change the old array, do not need return new element, other higher order functions need return
value and do not change the old array,
then we need to assign the manipulated to a new variable,
