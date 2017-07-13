function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};

var firstPrez = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPrez.front);
console.log(firstPrez.back);




module.exports = BasicCard;