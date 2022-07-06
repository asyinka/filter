
let content = [56, 49, 51, 27, 66, 77];
let pass = content.filter(validScore);
pass.forEach(print);



function validScore(element){
    return element >= 50;
}
function print(element){
    console.log(element)
}