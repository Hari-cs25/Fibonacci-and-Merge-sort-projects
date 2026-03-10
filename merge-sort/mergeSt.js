function mergeSort(list, outputArr=[]){

    if(list.length <= 1){
        return list;
    }

    let lenofarr = list.length;
    let first,second;
 
    first = mergeSort(list.splice(0,Math.floor(lenofarr/2)));
    second = mergeSort(list.splice(0));
     
    if(Array.isArray(first) && Array.isArray(second)){
        for(let i=0; i<1; ++i){
            for(let j=0; j<second.length; ++j){
                if(first[i]<second[j]){
                    outputArr.push(first[i]);
                    first.splice(i,1);
                if(first.length ===0)
                    break;
                j=-1;
                }
                else{
                    outputArr.push(second[j]);
                    second.splice(j,1);
                    if(second.length === 0)
                        break;
                    j=-1;
                }
            }
        }
        if(second.length !== 0){
            second.forEach((item)=>{outputArr.push(item)});
        }
        else if(first.length !== 0){
            first.forEach((item)=>{outputArr.push(item)});
        }
    }
 return outputArr;
}

let arr = [11,3,5,2,6];
console.log('array before sorting->', arr);
console.log('sorted array->', mergeSort(arr));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question('do you want to continue?(yes:y,no:n):', (input)=>{
    if(input === 'y'|| input === 'Y'){
        rl.question('enter the numbers: ',(num)=>{
            console.log(num.split(',').map(Number));
             console.log(mergeSort(num.split(',').map(Number)));
            rl.close();
    });
    }else
       rl.close();
});
