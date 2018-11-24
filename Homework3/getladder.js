/* const var:non_existence
 * To mark that a string is not in the dictionary or is in the ladder already.
 */
const non_existence=-1;

/* function in_dictionary
 * Usage:if(in_dictionary(string,dictionary)!=non_existence),...
 * ------------------------------------------
 * If the string is in the dictionary and not used before,
 * return the position of the word. Else, return non_existence.
*/

function in_dictionary(string, dictionary){
    var low=0,high=dictionary.length;
    var mid=(low+high)/2;
    while(low<=high){
        if(dictionary[mid].word > string){
            high=mid-1;
            mid=(low+high)/2;
            mid=parseInt(mid);
        }
        else if(dictionary[mid].word < string){
            low=mid+1;
            mid=(low+high)/2;
            mid=parseInt(mid);        
        }
        else{
            if(dictionary[mid].used === false){
                return mid;
            }
            else{
                return non_existence;
            }
        }
    }
    return non_existence;
}


/* Method:clone
 * Usage:temp=ladder.clone()
 * ------------------------------
 * Give every object a method, return the cloned object.
*/
Object.prototype.clone = function() {
    // Handle null or undefined or function
        if (null == this || "object" != typeof this)
            return this;
    // Handle the 3 simple types, Number and String and Boolean
        if(this instanceof Number || this instanceof String || this instanceof Boolean)
            return this.valueOf();
    // Handle Date
        if (this instanceof Date) {
            var copy = new Date();
            copy.setTime(this.getTime());
            return copy;
        }
    // Handle Array or Object
        if (this instanceof Object || this instanceof Array) {
            var copy = (this instanceof Array)?[]:{};
            for (var attr in this) {
                if (this.hasOwnProperty(attr))
                    copy[attr] = this[attr]?this[attr].clone():this[attr];
            }
            return copy;
        }
        throw new Error("Unable to clone obj! Its type isn't supported.");
    }

/* Function:getladder
 * Usage:document.write(getladder(start,destination,dictionary))
 * -----------------------------------------------------------
 * If the ladder between two words exists, return the ladder.
 * Else, return the string "No ladder!".
 */
function getladder(start,destination,dictionary){
    //First checkout if the input is valid.
    //If the start word is equal to destination, throw error.
    if(start === destination)
    {
        return "Start cannot be equal to destination.";
    }
    //If the start word doesn't have the same size as the destination word,throw error.
    if(start.length != destination.length)
    {
        return "Start must have the same length as destination.";
    }
    //If the start word or the destination does not consist of letters,throw error.
    var regs=/^[a-z]$/;
    for(let i=0;i<start.length;i++){
        if(!regs.test(start[i]) || !regs.test(destination[i]))
        {
            return "Invalid word.";
        }
    }

    //Create a stack to store the ladder.
    var ladder=new Array();
    /*Use temp which is equal to the ladder in each operation
    to avoid modifying the original ladder.*/
    var temp=new Array();
    //A queue to store every ladder.
    const ladderqueue=new Array();
    var top;
    ladder.push(start);
    ladderqueue.push(ladder);
    while(ladderqueue.length!=0)
    {
        //Take the ladder at the front of the queue.
        ladder=ladderqueue.shift();
        for(let i=0;i<start.length;i++)
        {
            //Change a letter every time.
            for(let j=0;j<letters.length;j++)
            {
                //Take the word on the top of the ladder.
                top=ladder[ladder.length-1].clone();
                temp=ladder.clone();
                if(top[i]===letters[j])
                {
                    continue;
                }
                /*The JS string can not be modified.So we modify
                it into an array first, modify the array, and join
                the array to return a modified string.
                */
                top=top.split("");
                top.splice(i,1,letters[j]);
                top=top.join("");
                //End the loop.
                if(top === destination)
                {
                    ladder.push(top);
                    return ladder.join("->");
                }
                //Else extend the ladder.
                else if( (is_in=in_dictionary(top,dictionary)) != non_existence)
                {
                    dictionary[is_in].used = true;
                    temp.push(top);
                    ladderqueue.push(temp);
                }
            }
        }
    }
    Noladder = "No ladder!"
    return Noladder;
}

