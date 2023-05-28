# Learning notes
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
9. In Angular, the template can only access properties and methods defined within the component class. This means that variables declared within lifecycle hooks like ngOnInit are not directly accessible in the template.

10. **Data passing from child to parent `@Output` decorator's use**
    - *Here we want to send data when and event will trigger. Suppose our children have room list where we gonna select a room and that room's data will be send to our parent component.* So here we create a button and when it will be click the data will go to the parent component. For that here we create an click event handler function with the button and in that function we will send the room data ( *which will ultimately go to the parent component* ) as a parameter room. Example:
      > `<button (click)="selectRoom(room)" >View</button></td>`

    - In **child.ts** file create a `@Output` decorator which will pass the data from child to parent. Example:
      > `@Output() ky = new EventEmitter<any>();`

      Here `ky` is used to take out the event or data from the child to parent. Here is an property  of event which can be use as `ky` is an instance of `EventEmitter()` called `emit` and this emit will take the data out from child and bring it to the parent. Here `<and>` is the data type of the data we want to send from the child to parent.
    - Now the parameter of first step need to pass inside that second step's emit function inside first step's function `selectRoom()` body. Example:  
        >```
        >selectRoom = (room:unknown):void =>{
        >   this.ky.emit(room)
        >}
        >```
        Here `<unknown>` is parameter's data type and `void` is function's return type. And thus in this `child.ts` file our `@Output` configuration is done.
    - Now we have to work on `parent.html` file. Here we have to wrap the the event. Example:
        >`<app-room (ky)="selectedRoomparent($event)" ></app-room>`

        ![](https://camo.githubusercontent.com/a10e8793b070012ed403e9b06c65a0bb3d197207ea97803eb73a1886930efb19/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f67756964652f696e707574732d6f7574707574732f696e7075742d6f75747075742d6469616772616d2e737667)
        Here the parameter where the room data is present needs to call as `$event` *parameter* inside the `selectedRoomparent` function.
    - Now In `parent.ts` file we we have to write the body of `selectedRoomparent()` function which was bind in `parent.html` file's children component tag.Example:
     
        >```
        > selectedRoomparent = (room:any):void =>{
        >   console.log(room)
        >   this.selectedRoomInfo = room
        >}
        >```
        Now here in the room variable the data selected from child component is present.        
        And here before using the data we have to assign the child's data to any variable that has global scope in that `parent.ts` file.

        ***Note:** All the mentioned functions should be called inside the class. Otherwise probably they won't work.* 🥴
      
   11. `ngOnChanges` is used to detected if there is any type of changes happened in the input data that children have or in the component. If the `@Input` decorator detect any change then it will check the changes and it will updated the changes and re-render that specific part of the component.

        *Note: Here to use this ngOnChanges hook we need to use or have the `@Input` decorator.*
   14. The code is
    
        ` @ViewChild(NavbarComponent) navbarCoponent : NavbarComponent;`
        

        In this code the error will be ***Property 'navbarCoponent' has no initializer and is not definitely assigned in the constructor.ts(2564).***  

        To avoid this error we need to use `!:` this operator and this operator will tell the editor that the `navbarComponent` will be initialize in compile time. The solve of the code is 
          
        ` @ViewChild(NavbarComponent) navbarCoponent !: NavbarComponent;`
      
        **To make @ViewChild useful first we have to pass the component inside the this decorator and then we have to make an instance of this decorator and then we have to use that instance and here in the example the navbarComponent is that instance.**


   14. `AfterViewInit` is used to view child's properties without `@Input` and `@Output` decorators. After implementing `AfterViewInit` class we will able to access the `ngAfterViewInit()` method which is used to find the `@ViewChild(x)` components which is for example x here, we will scope the x component's properties. We can access then in only `ngAfterViewInit()` scope. Not any where else in the class.
   12. According previous step we unable to scope the ngInit method of that grabbed component's property but we can do that by sending a parameter of `{static:true}`. Here is the example
   
       `@ViewChild(RoomComponent,{static:true}) roomComponent !: RoomComponent;`
   13. mew
  
  




