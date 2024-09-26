let random = Math.random()
let first, second, third;

// Chalo pehla yeh raha 

if(random<0.33){
    first ="cube"
}

else if (random<0.66 && random>=0.33){
    first = "mouse"
}

else {
    first = "keyboard"
}


random = Math.random()
if(random<0.33){
    second ="ps5"
}

else if (random<0.66 && random>=0.33){
    second = "ps5_slim"
}

else {
    second = "ps5_pro"
}


random = Math.random()
if(random<0.33){
    third ="rtx_4060ti"
}

else if (random<0.66 && random>=0.33){
    third = "rtx_4060"
}

else {
    third = "rtx_4090"
}



console.log(`${first} ${second} ${third}`);

