//input
const arr=[1,1,2,2,3,3,4,4,4,4,5,6,7,7,8]
// output=[1,2,3,4,5,6,7,8]

// Method 1- using javascript Predefined methods
console.log([...new Set(arr)])

//Method 2-usinf javascript filter method
const newArr=arr.filter((item,index)=>{
    return arr[index]!=arr[index+1]
})
console.log(newArr)

//Method 3

function removeDuplicates(arr)
{
    let newArray=[]
    for(let i=0;i<arr.length;i++)
    {
        
        if(arr[i]!==arr[i+1])
        newArray.push(arr[i])
    }
    return newArray;
}
console.log(removeDuplicates(arr))