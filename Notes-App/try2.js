const square=(x)=>{
    return x*x;
}
console.log(square(2));

const squared = (x)=>{
    return x*x;
}

console.log(squared(6));

const event = {
    name:'Birthday Pary',
    guestList : ['adi' , 'darshan','khushi'],
    printGuestList(){
        console.log('Guest list for ' + this.name);

        this.guestList.forEach( (x1) =>{
            console.log(x1 + this.name);
        })
    }
}

event.printGuestList();