let outarr =[];

function fibonaci(n){
    if(n<2)
        return n;
    else
        return (fibonaci(n-1)+fibonaci(n-2)); 
}

function Fibonaci(n){
    for(let i=0; i<n; ++i)
        outarr.push(fibonaci(i));
    return outarr;
}
console.log(Fibonaci(8));

