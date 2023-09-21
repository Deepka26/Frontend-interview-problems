const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
//output=6
const num=7;
function binarySearch(num,arr)
{
    let left=0;
    let right=arr.length-1
   
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(arr[mid]>num)
       right=mid-1
       else if(arr[mid]<num)
    left=mid+1
    else 
    return mid
    }
    
   return false 
}
console.log(binarySearch(num,arr))