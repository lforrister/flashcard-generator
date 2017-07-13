// The ClozeCard Constructor Function
function ClozeCard(text, cloze) {
	this.cloze = cloze;
	this.text = text;
	this.partial = this.text.replace(this.cloze, '...');
	this.fullText = text;
	this.error = function() {
		if (this.text.includes(this.cloze)) {
		}
		else {
			console.log("Error!");
		}


	};

};


// The firt Prez variable
var firstPrez = new ClozeCard(
	"George Washington was the first president of the United States.",
	"George Washington");


// Console log the properties 
console.log(firstPrez.cloze);
console.log(firstPrez.partial);
console.log(firstPrez.fullText);

// The broken variable to test the error function

var brokenCloze = new ClozeCard("This doesn't work", "oops");
brokenCloze.error();




module.exports = ClozeCard;