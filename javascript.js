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