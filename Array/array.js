console.log("Linear data structure")

//!-----------------------Array--------------------------

class Array
{
    constructor(array)
    {
        this.array=array
    }

    //* to find the length of the array
    length()
        {
            let count=0
            while(array[count]!=undefined)
            {
                count++
            }
            return count;
        }

}

let array= new Array()
console.log(`Length of an array is:${array.length()}`);


