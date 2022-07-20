function isPrime(num){
    let counter = 0;
    for(let i = 2; i <= num; i++){
        if(num % i == 0){
            counter++;
            if(counter >= 2){
                break;
            }
        }
    }
    console.log((counter >= 2 ? "No" : "Yes"));
}
isPrime(4);