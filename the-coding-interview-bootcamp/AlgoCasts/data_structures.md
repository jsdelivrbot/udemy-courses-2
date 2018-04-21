# Data Structures

- Ways of organizing information with optimal 'runtime complexity' for adding, editing, or removing records
- JavaScript natively implements several data structures
  * JS Array functionality ecompansses what a queue does
- **You will be asked about 'inferior' data structures**

### Queue

- Think of waiting in a line at a counter
- First in, first out (FIFO)
- Enqueuing: adding a record
- Dequeing: removing a record
- Queue in JavaScript
  * Make an array and only expose `.unshift()` and `.pop()`
  * `.peek()` returns the "top" record
  
  1.  Create a new empty queue: `const q = new Queue();`
  2.  Add a record to a queue: `q.add(1);`
  3.  Remove record at the end of a queue: `q.remove();`

### Stack

- Similar to Queue
- First in, last out (FILO)
- Stack in JavaScript
  * `.push()` adds a record to the stack
  * `.pop()` removes the "top" record in the stack
  * `.peek()` returns the "top" record without popping it