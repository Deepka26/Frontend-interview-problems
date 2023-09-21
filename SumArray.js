  

const arr=[-5,-4,-3,-2,0,2,4,6,8]
//output=[-4,4]

function sumZeroProblem (arr)
{
    for(let key of arr)
    {
        for(let j=1;j<arr.length;j++)
        {
            if(key+arr[j]===0)
            {
                return [key,arr[j]]
            }
        }
    }
}
// console.log(sumZeroProblem(arr))
function sumZeroProblem2 (arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]===0)
            {
                return [arr[i],arr[j]]
            }
        }
    }
}
// console.log(sumZeroProblem2(arr))

//Optimized Solution

function sumZeroProblem3(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right)
    {
        if(arr[left]+arr[right]>0)
        {
          right--
        }
        else if(arr[left]+arr[right]<0)
        {
           left++
        }
        else if(arr[left] + arr[right]===0)
        {
            return [arr[left],arr[right]]
        }
    }
}
console.log(sumZeroProblem3(arr))