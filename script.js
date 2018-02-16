//script.js

function getTriangleArea(a, h) {
	if ((a < 0) || (h <0)) {
		return  'Nieprawidlowe dane';	
	}

	else {
		return  (a*h/2);
	}	
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, -5);
var triangle2Area = getTriangleArea(-3, 15);
var triangle3Area = getTriangleArea(7.8, 1.1)
