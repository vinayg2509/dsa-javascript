// !------------------------------Linked List-----------------------------
class Node
{

    constructor(data)
    {
        this.data=data
        this.next=null
    }
}
class LinkedList
{
    constructor()
    {
        this.head=null
    }


    //*To find length
    length()
    {
       let count=0;
       let current=this.head
       while(current!==null)
       {
        count++
        current=current.next;
       }
       return count

    }

    //*Add element at the end
    append(data)
    {
        const newNode=new Node(data)
        if(this.head==null)
        {
            this.head=newNode
        }
        else
        {
            let current=this.head
            while(current.next!==null)
            {
                current=current.next
            }
            current.next=newNode
        }
    }
    //*To prepend element at first
    prepend(data)
    {
        const newNode= new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    //*delete
    delete(data)
    {
        if(this.head===null)return
        if(this.head.data===data)
            {
                this.head=this.head.next
                return
            }

        let current=this.head
        while(current.next!==null)
        {
            if(current.next.data===data)
            {
                current.next=current.next.next
                return
            }
        }
        current=current.next
    }
    //*To print list
    display()
    {
        let current=this.head
        let result=" "
        while(current!==null)
        {
            if(typeof current.data==='object')
            {
                result+=JSON.stringify(current.data)+"->"
            }
            else
            {
                 result+=current.data+"->"
            }
            current=current.next
        }
        console.log(result+null);
    }
    //*reverse
    reverse()
    {
        let prev=null
        let current=this.head
        let next=null
        while(current!==null)
        {
            next=current.next
            current.next=prev
            prev=current
            current=next

        }
        this.head=prev
    }
    //*To search data
    search(data)
    {
        let current=this.head;
        let index=0
        while(current!==null)
        {
            if(current.data===data)
            {
                return index;
            }
                current=current.next
               index++
        }
    return -1
    }
    //*To add element at index
    insertAt(index,data)
    {
        const newNode= new Node(data)
        if(index===0)
        {
            newNode.next=this.head
            this.head=newNode
            return
        }
        let current=this.head
        let count=0
        while(current!==null && count<index-1)
        {
            current=current.next
            count++
        }
        if(current===null)
        {
             console.log("Index out of bounds");
            return;
        }
        newNode.next=current.next
        current.next=newNode

    }








}
const list= new LinkedList()
list.append(8)
list.append(9)
list.prepend(10)
const person=({name:'Vinay',age:20})

// list.append(person)
// list.display()

// list.delete(10)
// list.delete(8)
// console.log(`Data present in index:${list.search(person)}`);

list.display()

console.log(`Length :${list.length()}`);
// list.reverse()
// list.insertAt(0,9)
list.insertAt(2,56)
list.display()
console.log(`Length :${list.length()}`);
