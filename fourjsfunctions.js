// Coding Challenge #1: Basketball Score
    function totalBasketballScore(numberFreeThrows, numberMidRange, numberThreePointers) {
	
    const freeThrows = 1;
    const midRange = 2;
    const threePointers = 3;
    
    
    if (typeof numberFreeThrows === 'number' && typeof numberMidRange === 'number' && typeof numberThreePointers === 'number') {
        let totalFreeThrows = freeThrows * numberFreeThrows;
        let totalMidRange = midRange * numberMidRange;
        let totalThreePointers = threePointers * numberThreePointers;
        
        let gameTotal = totalFreeThrows + totalMidRange + totalThreePointers;
        return gameTotal;

        } else {
            console.log('All Entries Must Be a Number');
        }
    }
console.log(totalBasketballScore(5, 7, 2));

// Coding Challenge #2: Computer Store

function itemPrice(item) {
    if (typeof item === 'string') { 
        switch(item) {
        case 'computer':
        console.log('$500');
        break;
        case 'mouse':
        console.log('$10');
        break;
        case 'tablet':
        console.log('$250');
        break;
        case 'case':
        console.log('$25');
        break;
        case 'router':
        console.log('$100');
        break;
        default:
        console.log('Sorry, we only carry computer, mouse, tablet, case, and router');
      } 
   } else {
      console.log('Please enter a string.');
   }   
};

itemPrice('computer');

// Coding Challenge #3: What’s for dinner?

const restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];

function randomRestaurant(numOfRestaurants) {
    const randomRestaurantList = [];
    for (let x= 0; x < numOfRestaurants; x++) {
        const randomNumGenerator = Math.floor(Math.random() * 7);
        randomRestaurantList.push(restaurants[randomNumGenerator]);
    }
    return randomRestaurantList;
}

console.log(randomRestaurant(3));

// Coding Challenge #4: Leap Year

function isLeapYear(year) {
    let leapYear;
    if(year % 4 === 0 && year % 100 != 0)
     {
        leapYear = true;
    } else if(year % 100 === 0 && year % 400 === 0) {
        leapYear = true;
    } else {
        leapYear = false;
    }
    return leapYear;
};

console.log(isLeapYear(1977));
