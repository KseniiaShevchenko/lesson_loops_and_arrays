// LOOPS

// first exercise

var btn1 = document.getElementById('btn1');

var out1 = document.getElementById('out1');

btn1.onclick = function () {
	for (i=4; i<401; i++) {
	var a1 = i+" ";
	out1.innerHTML += a1;
	}
}

// second exercise

var btn2 = document.getElementById('btn2');

var out2 = document.getElementById('out2');

btn2.onclick = function () {
	for (i=4; i<=13; i=i+3) {
	var a2 = i+" ";
	out2.innerHTML += a2;
	}
}

// third exercise

var btn3 = document.getElementById('btn3');

var out3 = document.getElementById('out3');

btn3.onclick = function () {
	for (i=654; i>=0; i--) {
	var a3 = i+" ";
	out3.innerHTML += a3;
	}
}

// fourth exercise

var btn4 = document.getElementById('btn4');

var out4 = document.getElementById('out4');

btn4.onclick = function () {
	for (i=1983; i<=2017; i++) {
	var a4 = "The year is "+i+"<br>";
	out4.innerHTML += a4;
	}
}

// fifth exercise

var btn5 = document.getElementById('btn5');

var out5 = document.getElementById('out5');

btn5.onclick = function () {
	for (i=-4; i<=100; i=i+2) {
	var a5 = i+" ";
	out5.innerHTML += a5;
	}
}

// LOOPS ENDS

// ARRAYS

// first exercise

var arr1 = [3, 6, 1, 13, 88, 43];

var showArr1 = arr1[0]+" "+arr1[3];

document.getElementById("btnArr1").onclick = function () {
	console.log("ARRAYS exercise 1: "+showArr1);
} 


// second exercise

var arr2 = ['Hi', "hello", 34, "prima"];

var showArr2 = arr2[0]+" "+arr2[arr2.length-1];

document.getElementById("btnArr2").onclick = function () {
console.log("ARRAYS exercise 2: "+showArr2);
}

// third exercise

var arr3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

var showArr3 = arr3.length;

document.getElementById("btnArr3").onclick =function () {
console.log("ARRAYS exercise 3: "+showArr3);
}

// fourth exercise

document.getElementById("btnArr4").onclick =function () {
	arr3[3] = "new element";
	console.log("ARRAYS exercise 4: "+arr3);
}

// fifth exercise

document.getElementById("btnArr5").onclick =function () {
	arr3[2] = 22;
	arr3[4] = 44;
	console.log("ARRAYS exercise 5: "+arr3);
}

// sixth exercise

document.getElementById("btnArr6").onclick =function () {
	arr3[10] = 100;
	console.log("ARRAYS exercise 6: "+arr3);
}

// seventh exercise

document.getElementById("btnArr7").onclick =function () {
	arr3[12] = 200;
	console.log("ARRAYS exercise 7: "+arr3);
	console.log("ARRAYS exercise 7 11 member : "+arr3[11]);
}

// eigth exercise

var arr4 = [31, 24, 35, 47, 12];

document.getElementById("btnArr8").onclick =function () {
	console.log("ARRAYS exercise 8: "+arr4[3]+arr4[60]);
}

// nineth exercise

document.getElementById("btnArr9").onclick =function () {
	for(var f=1; f<=7; f=f+3) {
		console.log("ARRAYS exercise 9: "+arr4[f]);
	}	
}

// tenth exercise

document.getElementById("btnArr10").onclick =function () {
	for(i=1; i<=5; i++) {
		console.log("ARRAYS exercise 10: "+arr3[i]);
	}	
}

// eleventh exercise

document.getElementById("btnArr11").onclick =function () {
	var i = document.getElementById("inputIndex").value;
		console.log("ARRAYS exercise 11: "+arr3[i]);
		
}

// twelweth exercise

document.getElementById("btnArr12").onclick =function () {
	var outArr12 = document.getElementById('outArr12');
	for(i=0; i<arr3.length; i++) {
		outArr12.innerHTML += arr3[i]+" ";
	}	
}

// thirteenth exercise

document.getElementById("btnArr13").onclick =function () {
	var outArr13 = document.getElementById('outArr13');
	for(i=arr3.length-1; i>=0; i--) {
		outArr13.innerHTML += arr3[i]+" ";
	}	
}

// fourteenth exercise

var arr5 = [2, 3, [4,5]];
document.getElementById("btnArr14").onclick =function () {
	
	console.log("ARRAYS exercise 14: "+arr5);
	console.log("ARRAYS exercise 14: "+arr5[0]+","+arr5[1]);
	console.log("ARRAYS exercise 14: "+arr5[2]);	
}

// fifteenth exercise

document.getElementById("btnArr15").onclick =function () {
	
	console.log("ARRAYS exercise 15: "+arr5[2][0]+","+arr5[2][1]);
}

//  sixteenth exercise

document.getElementById("btnArr16").onclick =function () {
	
	console.log("ARRAYS exercise 16: "+arr[2].lenght);
}

//  seventeenth exercise
 var arr6 = [ 2, [3,4,5], [6,7,8] ];
document.getElementById("btnArr17").onclick =function () {
	
	console.log("ARRAYS exercise 17: "+arr6[1][1]+","+arr6[2][2]);
}

//  eightteenth exercise

document.getElementById("btnArr18").onclick =function () {
	
	console.log("ARRAYS exercise 18: "+arr6[2]+","+arr6[0]);
}

//  nineteenth exercise
var arr7 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
document.getElementById("btnArr19").onclick =function () {
	
	console.log("ARRAYS exercise 19: "+arr7[2]);
}

//  twentees exercise
var arr8 = [['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
document.getElementById("btnArr20").onclick =function () {
	
	console.log("ARRAYS exercise 20: "+arr8[1][0]+","+arr8[0][2]);
}