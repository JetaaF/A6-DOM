// let divi = document.querySelector('div')
// //  selektimi  i elementeve me tage


// //  marrja me klasa
// let klas= document.querySelector('.message')
// // document.getElementsByClassName('message')


// //  marrja me id
// let iD = document.querySelector('#welcome')
// // document.getElementById('welcome')

let titulli = document.querySelector('h1')
// selekton 'Titulli 1' sepse e selekton vetem eleementin e par me ate tag

let titujt = document.querySelectorAll('.message')
//  selekton =Titulli 1= dhe =Titulli 2=
//kthen list me elemente nga 0

let elem = titujt[0]
// rez= Titulli 1
let elem2 = titujt[1]
// rez= Titulli 2





//  me inner mujm me shti edhe elemente te html

console.log(elem.textContent)
console.log(elem.innerHTML) //html  i brendshme

elem.textContent = '<i>JetA fazliu</i>'
// rezulatit nderron elem= <i>JetA fazliu</i>
//permbajtja tekstuale
elem.innerHTML = '<i>JetA fazliu</i>'
// rezultati e merr e bon tekstin italik dhe e jep = JetA fazliu
