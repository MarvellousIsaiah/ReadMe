let{testScores, testSquareOfScores, testGrade, isAfternoon,filterExpenses,filterHealthy}  = require("./question1.js")

test('Filtering scores greater than or equal to 70', () => {
    let arr = [95, 78, 85, 60, 45, 92, 56, 19, 40];
    let ans = testScores(arr)
  expect(ans).toEqual([95, 78, 85,92]);
});

test("map that grades are increased by 5",()=>{
let arr = [85, 92, 78, 88, 95];
let ans = testGrade(arr) 
expect(ans).toEqual([90, 97, 83, 93, 100])
});

test("testSquareOfScores",()=>{
    let arr = [2, 4, 6, 8, 9];
    let ans = testSquareOfScores(arr) 
    expect(ans).toEqual([4, 16, 36, 64, 81])
    });

    test("testSquareOfScores",()=>{
        class_timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
        let ans = isAfternoon(class_timings) 
        expect(ans).toEqual([ '1:00 PM', '3:00 PM', '5:00 PM' ])
        });

        test("testExpenses",()=>{
            let funds={ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
            let ans = filterExpenses(funds) 
            expect(ans).toEqual(380)
            });



            test("testHealthy",()=>{
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
                let ans = filterHealthy(shoppingList) 
                expect(ans).toEqual([
                    { name: 'Apples', category: 'Fruits', isHealthy: true },
                    { name: 'Carrots', category: 'Vegetables', isHealthy: true }
                  ])
                });