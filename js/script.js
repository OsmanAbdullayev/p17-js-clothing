class Clothing {
	constructor(price) {
		this.price = price;
	}
}
class Equipment extends Clothing {
	constructor(price, eqPrice, productsPerDay, eqName) {
		super(price);
		this.eqPrice = eqPrice;
		this.productsPerDay = productsPerDay;
		this.eqName = eqName;
	}
}
class Factory {
	constructor(
		initialEquipment,
		name,
		eqTwo = 0,
		eqThree = 0,
		eqFour = 0,
		eqFive = 0
	) {
		this.initialEquipment = initialEquipment;
		this.eqTwo = eqTwo;
		this.eqThree = eqThree;
		this.eqFour = eqFour;
		this.eqFive = eqFive;
		this.name = name;
	}
}

// Clothing prices
const hat = new Clothing(7);
const gloves = new Clothing(9);
const dress = new Clothing(30);
const shoes = new Clothing(20);
const shirt = new Clothing(10);
const trousers = new Clothing(15);
// Equipment Prices
const hatMaker = new Equipment(hat.price, 0, 2, "Hat Maker");
const glovesMaker = new Equipment(gloves.price, 0, 2, "Gloves Maker");
const shirtMaker = new Equipment(shirt.price, 100, 2, "Shirt Maker");
const trousersMaker = new Equipment(trousers.price, 150, 2, "Trousers Maker");
const shoesMaker = new Equipment(shoes.price, 170, 2, "Shoes Maker");
const dressMaker = new Equipment(dress.price, 200, 2, "Dress Maker");
// Factory Settings
const factoryOne = new Factory(hatMaker, "Factory One");
const factoryTwo = new Factory(glovesMaker, "Factory Two");

const factoryIncome = (factoryName, daysPassed) => {
	let income = 0;
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let executedA = false;
	let executedB = false;
	let executedC = false;
	let executedD = false;
	for (let i = 1; i <= daysPassed; i++) {
		income +=
			factoryName.initialEquipment.productsPerDay *
				factoryName.initialEquipment.price +
			a +
			b +
			c +
			d;
		if (income >= dressMaker.eqPrice && !executedA) {
			executedA = true;
			factoryName.eqTwo = dressMaker;
			income -= dressMaker.eqPrice;
			a = factoryName.eqTwo.productsPerDay * factoryName.eqTwo.price;
		} else if (income >= shoesMaker.eqPrice && !executedB) {
			executedB = true;
			factoryName.eqThree = shoesMaker;
			income -= shoesMaker.eqPrice;
			b = factoryName.eqThree.productsPerDay * factoryName.eqThree.price;
		} else if (income >= trousersMaker.eqPrice && !executedC) {
			executedC = true;
			factoryName.eqFour = trousersMaker;
			income -= trousersMaker.eqPrice;
			c = factoryName.eqFour.productsPerDay * factoryName.eqFour.price;
		} else if (income >= shirtMaker.eqPrice && !executedD) {
			executedD = true;
			factoryName.eqFive = shirtMaker;
			income -= shirtMaker.eqPrice;
			d = factoryName.eqFive.productsPerDay * factoryName.eqFive.price;
		}
	}

	console.log(
		`The ${factoryName.name}'s income after ${daysPassed} day(s) is $${income}.`
	);
	console.log(
		`At this moment, this factory earns $${
			factoryName.initialEquipment.productsPerDay *
				factoryName.initialEquipment.price +
			a +
			b +
			c +
			d
		} per day.`
	);

	console.log('')
	console.log(
		`After ${daysPassed} days, the factory possesses the following equipment:`
	);

	if (factoryName.eqTwo.eqName) {
		console.log("Dress Maker, which costs $" + dressMaker.eqPrice);
	}
	if (factoryName.eqThree.eqName) {
		console.log("Shoes Maker, which costs $" + shoesMaker.eqPrice);
	}
	if (factoryName.eqFour.eqName) {
		console.log("Trousers Maker, which costs $" + trousersMaker.eqPrice);
	}
	if (factoryName.eqFive.eqName) {
		console.log("Shirt Maker, which costs $" + shirtMaker.eqPrice);
	}
};

factoryIncome(factoryOne, 200);

// 112 + 20 - 100

// try {
// 	// creating a function
// 	const farmersIncome = (daysPassed) => {
// 		// declaring constant variables
// 		const cowPrice = 300;
// 		const milkPrice = 3;
// 		const milkLitersPerDay = 3;
// 		// declaring changing variables
// 		let cowsNumber = 1;
// 		let income = 0;

// 		// creating a loop for income update each day
// 		for (let i = 1; i <= daysPassed; i++) {
//             // each day income adds on
// 			income += milkLitersPerDay * cowsNumber * milkPrice;
// 			// creating a loop to update the income after buying cows. If no cows are bought, the income updates without substracting the cow price
// 			for (let k = 1; k < daysPassed; k++) {
// 				if (income >= 300 * k && income < 300 * (k + 1)) {
//                     // amount of money spent to new cows
// 					income -= 300 * k;
//                     // number of cows which are bought
// 					cowsNumber += 1 * k;
// 				}
// 			}
// 		}
// 		console.log("After", daysPassed, "days");
// 		console.log("the farmer owns", cowsNumber, "cows");
// 		console.log("and his remaining income after buying the cows (if any) is $", income + ".");
// 		console.log("At that moment he gets", milkLitersPerDay * cowsNumber, "liters of milk per day");
// 		console.log("and earns $", milkLitersPerDay * cowsNumber * milkPrice, "per day.");
// 		console.log("His total revenue is $", cowPrice * cowsNumber + income);

// 		if (cowPrice * cowsNumber + income > 15000) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	};

// 	console.log("Can the farmer afford a new farm for $ 15 000 yet?", farmersIncome(151));
// } catch (err) {
// 	console.log("An error occured while executing the code. Please, contact Osman.");
// }
