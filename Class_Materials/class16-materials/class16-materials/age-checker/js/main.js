//Create a conditonal that checks their age
//let mind = document.querySelector('#danceDanceRevolution').value
//mind = 15
//If under 16, tell them they can not drive
//if(age<16){
//    console.log("You can't drive")
//}else if(age<18){
//    console.log("You can't hate from outside the club, because they can't even get in")
//}else if(age<21){
//    console.log("You can not drink")
//}else if(age<25){
//    console.log('You can not rent cars affordably')
//}else if(age<30){
//    console.log("You can not rent fancy cars affordably")
//}else if(age>=30){
//    console.log("You have nothing left to look forward to")
//}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('#check').addEventListener('click',run)
function run(){
    const age = document.querySelector('#danceDanceRevolution').value
    console.log(age)
    if(age<16){
        paragraph = "You can't drive"
    }else if(age<18){
        paragraph = "You can't hate from outside the club, because they can't even get in"
    }else if(age<21){
        paragraph = "You can not drink"
    }else if(age<25){
        paragraph = 'You can not rent cars affordably'
    }else if(age<30){
        paragraph = "You can not rent fancy cars affordably"
    }else if(age>=30){
        paragraph = "You have nothing left to look forward to"
    }
    document.querySelector('p').innerText = paragraph
}