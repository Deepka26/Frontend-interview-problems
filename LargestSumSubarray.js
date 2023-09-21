//inpit
const arr=[1,2,3,4,3,5,4,6,7,8]
const num=4;
function largestSubarray(arr,num){
    let max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<=arr.length-num;i++)
    {
        let sum=0;
       for(let j=i;j<=i+3;j++)
       {
        sum+=arr[j]
       }
       if(sum>max)
       max=sum
    }
    return max
}
console.log(largestSubarray(arr,num))