console.log("Linear data structure")

//!-----------------------Array--------------------------

class MyArray
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
             for(let index=0;index<this.length();index++)
            {
                console.log(array[index]);
            }
        } 
       
    }
    //*To add first (unshift)
    customUnshift(array,value)
    {
        for(let index=this.length();index>=0;index--)
            {
                array[index]=array[index-1]
            }
            array[0]=value
    }
}

let array= new MyArray()


array.customUnshift(array,20)
array.customUnshift(array,10)
array.customUnshift(array,30)

console.log(`Length of an array is:${array.length()}`);
array.displayElement()



