var pemain1 = 'John';
var pemain2 = 'Jeny';
var pemain3 = 'Juky';

var tinggi1 = 185;
var tinggi2 = 169;
var tinggi3 = 195;

var usia1 = 28;
var usia2 = 30;
var usia3 = 27;

var skor1 = tinggi1 + (5 * usia1);
var skor2 = tinggi2 + (5 * usia2);
var skor3 = tinggi3 + (5 * usia3);

console.log("Skor John = ", skor1);
console.log("Skor Jeny = ", skor2);
console.log("Skor Juky = ", skor3);


if (skor1 > skor2 && skor1 > skor3) {
	console.log(pemain1 + ' menang dengan skor ' + skor1 + ' point');
} else if (skor2 > skor1 && skor2 > skor3) {
	console.log(pemain2 + ' menang dengan skor ' + skor2 + ' point');
} else if (skor3 > skor1 && skor3 > skor2) {
	console.log(pemain3 + ' menang dengan skor ' + skor3 + ' point');
} else {
	console.log('Hasil Imbang');	
}
