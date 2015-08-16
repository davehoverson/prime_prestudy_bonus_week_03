function A(value){
	return value*2+1;
}
function B(value){
	return value+100/2;
}
function C(value){
	return value-2+4;
}
console.log(A(B(C(4))));