//import addfive function... from local addfive.js file
const addfive = require(`./addfive.js`)

//test function with 2 argument
test('returns the number plus 5',()=>
{
    expect(addfive(1)).toBe(6);
})

