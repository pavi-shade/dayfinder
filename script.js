const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const but = document.getElementById("getDay");
const result = document.getElementById("result");
const lod = document.getElementById("loding");



but.addEventListener("click", () =>{
    let dateObj = new Date( `${date.value} ${month.value} ${year.value}`);

    let getDay = dateObj.toString();
    getDay = getDay.slice(0,3);

    result.innerText = "Something Cooking......";
    setTimeout( () =>{
        result.innerText = getDay;
    },2000);
},)