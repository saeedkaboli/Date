var El={
    Body:document.querySelector("body"),
    Cover:document.getElementById("cover")
}

function Scan(){
    var date=new Date;
    console.log(date.getHours());
    console.log(typeof(date));
    if(date.getHours()>=7 && date.getHours()<=18 ){
     El.Cover.style.left=0;
    }
    else if(date.getHours()>=18 && date.getHours()<=23){
        El.Cover.style.left="-500px";
    }

}
