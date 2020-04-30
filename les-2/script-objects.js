let anObject = {
    valOne: 'test', 
    val_two: 2,
    'val Space': false,
    valObject: {
        subVal: 'test',
    },
    valFunction: function(a) {
        console.log(this);
        return a + this.val_two;
    }
};

console.log(anObject);

console.log(anObject['val Space']);

let keyVal = 'val_two';

console.log(anObject[keyVal]);

console.log(anObject.valOne);

console.log(anObject.valFunction(3));


let person = {
    firstName: 'Jan',
    lastName: 'Vandewalle',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.fullName());

console.log(Object.keys(person));
console.log(Object.keys(person)[0]);

let personKeys = Object.keys(person);
console.log(personKeys[0]);
personKeys.length;