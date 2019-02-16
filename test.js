var get=(id,callback)=>{
 console.log(id);
 //setTimeout( callback,2000);
 callback(12);
 console.log("eeee");
 //callback(12);
}
get(12,(id=4)=>{
    console.log("id",id);
    console.log(1111);
    console.log(22222222);
    console.log(444444444);
    console.log(55555555);
    setTimeout(()=>{console.log("time out")},2000)
})