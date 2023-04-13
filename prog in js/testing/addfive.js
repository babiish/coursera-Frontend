function addfive(i) 
{
    return i+5;
}

//to export the function as a node module 
module.exports=addfive;  //for anaylz and exporting add five function

//import this from other file by 'require' function


///node --verison
// jest --version
//run  npm init -y   == creats pakacge.json file  //-y for  auto yes to all prompts from npm

//package.json file =for keeping node modules i used in my project
//node have millions modules
//sharing package.json easy for other programer to install only modules what i installed for my project

///after node npm initiliz ,,,we can install any module 

///example installing jest library -saving locally
//npm install --save-dev jest

//Then
//1.package.json will be updated with a dev depedncy name= jest        //dependency --packege need for app production   //dev-depndency ==package need for dev and testing localy 
//2.node modules folder created for storing installed module codes

//3. replace the script    //"echo \"Error: no test specified\" && exit 1"  //with jest
//4. npm run test  == it runs jest  == b/c it is object and it is its value

//5. create a file named addfive.test.js  -play with it 
//6. npm run test