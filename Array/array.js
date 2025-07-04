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

    //*To traverse an array
    displayElement()
    {
       
        if(this.length()==0)
        {
            console.log(`Array is empty`);
        }
        else
        {
             for(let index=0;index>this.length();i++)
            {
                console.log(array[index]);
            }
        } 
       
    }
}

let array= new Array()
console.log(`Length of an array is:${array.length()}`);
array.displayElement()


