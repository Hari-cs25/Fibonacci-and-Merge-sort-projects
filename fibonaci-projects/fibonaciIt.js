function fibonaci(n){

    let outArr = [0,1];
    if(n < 2)
       return outArr = [0];
    else if(n===2)
        return outArr;

    for(let i=0; i<n-2; ++i){
        outArr.push(outArr[i]+outArr[i+1]);
    }
    return outArr;
}
console.log(fibonaci(11));