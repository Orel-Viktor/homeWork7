// Напишите функцию, которая запускает цикл. 
// Цикл на каждой итерации предлагает через prompt ввести число, 
// большее 100 (но максимум 10 итераций цикла) . 
// Если посетитель ввёл число меньше ста – попросить ввести ещё раз, и так далее. 
// Если пользователь вводит число больше ста, текст или цикл заканчивает все итерации, 
// то функция выводит в консоль последний ввод пользователя и завершает функцию.


const getNumber = function(){
    
        for(let i =1 ; i <= 10 ; i++){
            let x = (prompt ('Введите число' ))
            if(x <= 100){
                if(i === 10){
                    console.log('GG!!')
                    break
                }
                alert('Введите число больше 100 ')
                continue
                
            } 
                          console.log(x)
                     break
            
            }
            
            
        }
getNumber()


    // Дан массив объектов. Вывести массив телефонных номеров активных пользователей, у которых баланс более 2000
let users = [
    {
     "isActive": true,
     "balance": "226.60",
     "name": "Eugenia Sawyer",
     "phone": "+1 (840) 583-3207",
    },
    {
     "isActive": true,
     "balance": "2613.77",
     "name": "Pauline Gallegos",
     "phone": "+1 (985) 593-3328",
    },
    {
     "isActive": false,
     "balance": "3976.41",
     "name": "Middleton Chaney",
     "phone": "+1 (995) 591-2478",
     },
    {
     "isActive": false,
     "balance": "1934.58",
     "name": "Burns Poole",
     "phone": "+1 (885) 559-3422",
     },
    {
     "isActive": true,
     "balance": "3261.65",
     "name": "Mcfadden Horne",
     "gender": "male",
     "phone": "+1 (942) 565-3988",
     },
    ]

    function filterBalance(user){
        return user.balance > 2000
    }

    function mapPhone(user){
        return user.phone
    }
    const  usersPhone = users.filter(filterBalance).map(mapPhone)
    console.log (usersPhone)

    // const  usersPhone = users.filter( user =>user.balance > 2000).map(user => user.phone )
    // console.log (usersPhone)




































// const usersBalance = users.map(users =>users.balance > 2000)
// console.log(usersBalance)



// Тот же пример , но функция обьявлена по другому
// function getNumber (){
    
//         for(let i =1 ; i <= 10 ; i++){
//             let x = (prompt ('Введите число' ))
//             if(x <= 100){
//                 if(i === 10){
//                     console.log('GG!!')
//                     break
//                 }
//                 alert('Введите число больше 100 ')
//                 continue
                
//             }if ( x > 100 || typeof x == 'string' ){
//                     console.log(x)
//                     break
//             } 
            
//             }
            
            
//         }
// getNumber()
// console.log(getNumber)



// const getNumber = function(){
    
//     for(let i =1 ; i <= 10 ; i++){
//         let value = (prompt ('Введите число' ))
//         let x = +value
//         if ( x > 100 || isNaN(x) ||(i === 10) ){
//             console.log(value)
//             break
//     } 
//         if(x <= 100){
            
//             alert('Введите число больше 100 ')
//             continue
            
//         }
        
         
        
//         }
        
        
//     }
// getNumber()