function Person(firstName, lastName, age, gender) {
     var MAX_AGE=150, MIN_AGE = 0;
     var GENDERS = ["Male", "Female"];
     var _age, _gender;
   this.firstName = firstName;
   this.lastName = lastName;
   
   this.setAge = function(age) {
       if(age < 0 || age > 150) {
           throw new Error('Age is not valid, should be:' + GENDERS);
       }
       _age = age;
   }
   this.getAge = function() {
       return _age
   }
   this.setAge(age);
   this.setGender = function(gender) {
    if(GENDERS.indexOf(gender) === -1) {
        throw new Error('Age is not valid, should be between:' + MIN_AGE + 'and' + MAX_AGE);
    }
    _gender = gender;
}
this.getGender = function() {
    return _gender
}
this.setGender(gender);
}

function Employee(firstName, lastName, age, gender, email, id) {
    // this.email = email;
    // this.id = id;

    var obj = Object.create(new Person(firstName, lastName, age, gender))
    obj.email = email;
    obj.id = id;
    
    return obj;

    // this.__proto__ = new Person(firstName, lastName, age, gender);
    // Person.call(this, firstName, lastName, age, gender);
}



var olia = new Employee("Olia", "Plekan", 27, "Female", "olia.@gmail.com", 17);

// function MyString (string) {
//     this.reverse = function(string) {
//         return string.split('').reverse().join('');
//     }
// this.reverse(string);

//     this.ucFirst = function(string) {
//         return string.replace(string[0], string[0].toUpperCase());
//     }
//     this.ucFirst(string);

//     this.ucWords = function(string) {
//         return string.split(' ').map(function(elem) {
//             return elem.replace(elem[0], elem[0].toUpperCase())
//         }).join(' ');
//     }
//     this.ucWords(string);
// }

// var str = new MyString('abcde');
// console.log(str.reverse('abcde'));
// console.log(str.ucFirst('abcde'));
// console.log(str.ucWords('abcde abcde abcde'));


// function User (name, surname) {
// 		this.name = name;
// 		this.surname = surname;
	
// 	    this.getFullName = function() {
//            return this.name + ' ' + this.surname;
//         }
           
//     }



// function Student (name, surname, year) {
//     User.apply(this, arguments);
//     // User.call(this, name, surname)

//     this.getCourse = function(year) {
//         return (new Date()).getFullYear() - year;
//     }
// }

// var student = new Student("Bill", "Smith", 2016);
// console.log(student.getCourse(2016));
// console.log(student.surname);
// function Rectangle(width, height) {
//     this.elem = document.createElement('div');
//     this.elem.style.width = width + "px";
//     this.elem.style.height = height + "px";
//     this.elem.style.border = "1px solid black";

//     document.body.appendChild(this.elem);

//     this.setWidth = function(width) {
//         this.elem.style.width = width + "px";
    
//     }
//     this.getWidth = function() {
//         return this.elem.style.width;
//     }
// }

// var rect = new Rectangle(200, 300);
// rect.setWidth(300);
// console.log(rect.getWidth());


