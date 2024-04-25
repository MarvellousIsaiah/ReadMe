function testScores(myScores){
    let ans = myScores.filter(num=> num >= 70);
    return ans
}






grades = [85, 92, 78, 88, 95]

 function testGrade(grades){
    return   grades.map(num=> num + 5)
   

 }
 



function testSquareOfScores (scores){
    return scores.map(num=> num * num)

}
class_timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]


function isAfternoon(classTiming){
   return classTiming.filter(time => time.endsWith("PM"));
}
                              

function filterExpenses(expenses){
                 let initialAmount = 0;
            for (let eachExpense in expenses){
                  initialAmount+=expenses[eachExpense];                    
            }
            return initialAmount;
}







const shoppingList = [
    { name: 'Apples'
    , category: 'Fruits'
    , isHealthy: true },
    { name: 'Potato Chips'
    , category: 'Snacks'
    , isHealthy: false },
    { name: 'Carrots'
    , category: 'Vegetables'
    , isHealthy: true },
    { name: 'Chocolate Bars'
    , category: 'Sweets'
    , isHealthy: false },
    { name: 'Greek Yogurt'
    , category: 'Dairy'
    , isHealthy:false}]


    function filterHealthy(shoppingList){
        return shoppingList.filter(consumables => consumables.isHealthy===true)
    }

    console.log(filterHealthy(shoppingList))
let funds={ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
console.log(filterExpenses(funds))
console.log(isAfternoon(class_timings))


    




module.exports = {testScores, testGrade,testSquareOfScores,isAfternoon,filterExpenses,filterHealthy};


 




