//Bubble Sort
// A soting algorithm is where the largest element bubbles up at the top
const arr=[5,3,4,1,2,8,6,7]
function BubbleSort(arr)
{
    for(let i=arr.length;i>0;i--)
    {
        for(let j=0;j<i-1;j++)
        {
            if(arr[j]>arr[j+1])
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
    return arr;
}
console.log(BubbleSort(arr))