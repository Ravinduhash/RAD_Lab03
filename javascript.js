function check(){
    alert("check");
}

function add(text1,text2){
    alert(text1.concat(text2));
}

function lower(text){
    alert(text.toLowerCase());
}   

function upper(text){
    alert(text.toUpperCase());
}

function splittext(text){
    // alert("chekc");
    var arr = text.split(',');
    var str = "";
    for(let i=0; i<arr.length   ; i++){
        str = str + arr[i]+"\n";
    }
    // let text2 = "";
    // for (let i = 0; i < arr.length; i++) {
    //     text2 += arr[i] + "\n";
    // }

    alert(str);
}

function findIndex(text){
    alert(text.indexOf("Phobia"));
}

function q1(){
    alert("true and true :"+ and(true,true) + "\ntrue and false :" + and(true,false) + "\nfalse and false :" + and(false,false))
}

function and(x,y){
    return x&&y
}

function q2(num){
    alert("Type of the variable is "+ typeof(num));
}

function q3(){
    const currentDate = new Date();
    alert("Today is "+ currentDate+"\nThe data type of currentDate is "+ typeof(currentDate));
}

function q4(){
    var text = "OceanGate";
    if(text.length>10){
        alert("The length of the text is greater than 10");
    }
    else{
        alert("The length of the text is not greater than 10");
    }
    
}

// ------------------------------Activiy 03------------------------------
function Q1(){
    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"];
    alert(games.indexOf("God of War"))
}

// const data = [["Name","John"],["Age",30],["City","Colombo"]]
// const person = new Map();
function createMap(){
    // alert("check1")
    const data = [["Name","John"],["Age",30],["City","Colombo"]];
    // alert(sizeof(data))
    arrayToMap(data)
    
}
function arrayToMap(map){
    // alert("check")
    const person = new Map(map);
    // Map.set(data)
    alert("name: "+person.get("Name")+"\nAge: "+person.get("Age")+"\nCity: "+person.get("City"));
}

function Mapelemetdelete(){
    // alert("check1")
    const data = [["Name","John"],["Age",30],["City","Colombo"]];
    // alert(sizeof(data))
    deleteAge(data)
    
}
function deleteAge(map){
    // alert("check")
    const person = new Map(map);
    // Map.set(data)
    alert("Before delete Age the size of Map: "+person.size);
    person.delete("Age");
    alert("After delete Age the size of Map: "+person.size);
}

function Q4(){
    const fruits = new Map();
    fruits.set("apple",5);
    fruits.set("banana",3);
    fruits.set("orange",2);
}