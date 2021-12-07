function setup() {
  createCanvas(400, 400);
}

var xPos = 20;
var yPos = 20;
var aPos = 20;
var bPos = 20;
var cPos = 20;
var dPos = 20;

function draw() {

background(188, 138, 222);
xPos += 2;
yPos +=2;
aPos -= 2;
bPos -= 2;
cPos += 3;
dPos -=3;
// book 1
   fill(5, 5, 79);
   rect(xPos, yPos,10,50);
   fill(108, 36, 191);
   rect(xPos+5,yPos,40,50);
   // book 2
   fill(66, 4, 4);
   rect(cPos+30, dPos+60, 10, 50);
   fill(140, 26, 26);
   rect(cPos+35, dPos+60,40,50);
   // book 3
   fill(8, 18, 87);
   rect(aPos+65, bPos+120,10,50);
   fill(37, 122, 168);
   rect(aPos+70,bPos+120,40,50);
   // bookshelf
   fill(74, 56, 10);
   rect(100,150,150,250);
   // bookshelf inside
   fill(99, 81, 11);
   rect(120,170,110,210);
   // bookshelf shelf 1
   fill(74, 56, 10);
   rect(120,200,110,20);
   //bookshelf shelf 2
   fill(74,56,10);
   rect(120,260,110,20);
   //bookshelf shelf 3
   fill(74,56,10);
   rect(120,320,110,20);
};