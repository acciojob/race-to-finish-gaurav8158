window.promises = [];
const p1 = new Promise(resolve()=>setTimeout(resolve,1000));
const p2 = new Promise(resolve()=>setTimeout(resolve,1000));
const p3 = new Promise(resolve()=>setTimeout(resolve,1000));
const p4 = new Promise(resolve()=>setTimeout(resolve,1000));
const p5 = new Promise(resolve()=>setTimeout(resolve,1000));

let arr = [p1,p2,p3,p4,p5];
const div = document.getElementById("output");
Promise.any(promises).then((data) => 
	div.value+=data;
	// console.log(value)
						  );
// Do not change the code above this
// add your promises to the array `promises`
