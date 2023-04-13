//json = object in string format

'{"greeting":hello}'  //double qoute is must  /not support commnet

const jsonStr='{"greeting":55}'


////conv to js by parsing==for using obj and attribs 

console.log( JSON.parse(jsonStr) )  //return js normal obj

const obj= JSON.parse(jsonStr)   // obj= {greeting : "hello"} 
obj.greeting='ola';  //changed

console.log(obj);  



///js obj => to json sting  =strignfy 


const data={
    name:'babish',
    age:22
}

console.log(JSON.stringify(data)) //return string =json string=== no functions allowed  ==methods are egnored during stringfy

///

