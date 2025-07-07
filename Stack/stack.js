class Stack
{
    constructor()
    {
        this.storage={}
        this.count=0
    }
    isEmpty()
    {
         return this.count === 0;
    }
    // *To display
    display()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
            return
        }
        let result=""
        for(let i=this.count-1;i>=0;i--)
        {
            result+=this.storage[i]+"->"
        }
        console.log(result);
        
    } 
    //*To add data at top
    push(data)
    {
        this.storage[this.count++]=data
    }
    //*To remove from top
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
            return
        }
        const top=this.storage[this.count-1]
        delete this.storage[this.count]
        this.count--
        return top
    } 

    //* to return size
    size()
    {
        return this.count
    }

    //* To delete
    delete(data) {
    if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
    }

    let tempStack = new Stack();

    let found = false;

    // Pop all elements and push to tempStack except the one to delete
    while (!this.isEmpty()) {
        let top = this.pop();
        if (top === data && !found) {
            found = true; // Delete only first match
            continue;
        }
        tempStack.push(top);
    }

    // Restore elements back to original stack
    while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
    }

    if (!found) {
        console.log("Element not found");
    } else {
        console.log(`Deleted: ${data}`);
    }
}

}

const stack=new Stack()
stack.push(8)
stack.push(5)
stack.push(2)
stack.push(34)
stack.push(85)

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
console.log(`Size of the stack is ${stack.size()}`);

console.log(stack.isEmpty());
stack.delete(95)
stack.display()