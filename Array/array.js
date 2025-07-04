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
        if (length == 0) 
            {
            console.log(`Array is empty`);
            }
            else 
            {
            for (let index = 0; index < length; index++) 
                {
                    console.log(this.array[index]);
                }
            }
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
}

// Testing
let array = new MyArray();

array.customUnshift(20);
array.customUnshift(10);
array.customUnshift(30);
array.customUnshift(56);

console.log(`Length of an array is: ${array.length()}`);
console.log(`Removed element from an array is : ${array.customShift()}`);


array.displayElement();
