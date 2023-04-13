//Testing

//Debugging is fixing a bug in your code.
//Refactoring is reworking your code to make it more efficient and easier to maintain. 

//..3 types of testing
//unit test-- testing each piece of code -functions/class  
//integration testing-- testing our code intraction to each other
//end2end testing --testing each functionality of web or app == by pretending like user 



// js testing =unit testing
// =have no methods of testing but frameworks  ==ex- with jest framework-by meta
//jest testing for js react node vue....

//jest ==have code coverage
//20% code coverge means == 20% code coverd by testing  

function concatString(a,b) {
    return a+b;
}
expect(concatString('abc','def')).toBe('abcdef');

//jest have mocking built-in methods
//mocking  - preteding some feutures exist to test it  -example database mocking=== where database is late devloped
