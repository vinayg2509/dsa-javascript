console.log("Linear data structure");

//!-----------------------Array--------------------------

class MyArray 
{
    constructor(array = []) 
    {
        this.array = array;
    }

    //* to find the length of the array
    length() {
        let count = 0;
        while (this.array[count] != undefined) 
        {
            count++;
        }
        return count;
    }

    //* To traverse an array
    displayElement()
    {
        let length = this.length();
        let result=" "
        if (length == 0) 
            {
            console.log(`Array is empty`);
            }
            else 
            {
            for (let index = 0; index <length; index++) 
                {
                  result +=this.array[index];
                  if(index<length-1)
                  {
                    result+=","
                  }
                }
            }    
            console.log(`[${result}]`);
                 
    }

    //* To add at first (unshift)
    customUnshift(value) 
    {
        let length = this.length();
        for (let index = length; index > 0; index--) 
        {
            this.array[index] = this.array[index - 1];
        }
        this.array[0] = value;
    }

    //* To remove from first (shift)
    customShift() 
    {
        let first = this.array[0];
        let length = this.length();
        for (let index = 0; index < length - 1; index++) 
        {
            this.array[index] = this.array[index + 1];
        }
        this.array.length = length - 1;
        return first;
    }

    //*To add element at last(push)
    customPush(array,value)
    {
        let length=this.length()
        this.array[length]=value
        return this.length()
    }

    //*To remove element from end
    customPop(array)
    {
        let length=this.length()
        let lastElement=this.array[length-1]
        if(length==0)
        {
            return undefined
        }
        this.array.length--
        return lastElement

    }

    //*To reverse an array
    reverse(array)
    {
        let start=0
        let end=this.length()-1

        while (start<end)
        {
            let temp=this.array[start]
            this.array[start++]=this.array[end]
            this.array[end--]=temp         
        }
        return array;
    }
}

// Testing
let array = new MyArray();

array.customUnshift(20);
array.customUnshift(10);
array.customUnshift(30);
array.customUnshift(56);

// console.log(`Length of an array is: ${array.length()}`);
// console.log(`Removed element from an array is : ${array.customShift()}`);
// console.log(`After added element to array at end the length is ${array.customPush(array,19)}`);
// console.log(`Removed element from array at last is ${array.customPop(array)}`);
// array.displayElement();
array.reverse(array).displayElement()


