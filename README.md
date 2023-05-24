**Learning notes**
1. Decoratos -> If these are associate with any function then it will be called first and this decorator can change or modify the function. It can be used with any object, parameter, class etc. They are written as `@Decorator`. There are many types of build in decorator in angular. Custom decorator is also possible. 
2. Directives are used to modify the html tags. They are written in angular's html file or html template. Custom directives are also possible. [Learn more](https://angular.io/guide/built-in-directives)
3.  If you want to declear interface, decorator, class in the same file then you have to declear the interface first and then you have to call the decorator and then the class. 
4.  In typescript there is a default constructor in there so it's not needed to declear a constructor here. 
5.  A constructor is needed when an instance of class is decleared.
6.  `@Input` and `@Output` decorators are used in the component who will get the data.
7.   `@Input` decorator is used to get data from parent to child. For that first we need to bind data in child component like this
 ![image](https://github.com/SadikHasanRafi/data-sending-practice-angular/assets/75904310/39d1bc6a-1dfe-4eca-9137-0f80e1c79e0a)
then in child component we have to recive the data that is send from parent like this 
```
@Input() dataThatIsSendFromParentWillBeNowInThisVariable: hereTheDataTypeOfSendData; 
//here it is good to use unknown instead of any as data type if the data type is unpredictable🥴.
```
8. In Angular, square brackets `[]` are used for property binding, and parentheses `()` are used for event binding.


