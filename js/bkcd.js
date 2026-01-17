console.log(this)

let myObj = {
    name: "Name",
    text: "LOL",
    myCall: function(){
        console.log(this)
        const log = function(){
            console.log(this)
        }
        log()
    }
}

myObj.myCall()