# Investment Calculator

In this react web we tack below values as user input :
     
      Initial Investment
      Annual Investment
      Expected Return
      Duration In Years

And calculate the below value for each year 

      Current investment value Investment Value 	
      Interest Gain per Year	
      Total Interest Gain	
      Total invested Capital
      
And show them in a table. 

## Tech Stack 
    -> React js
    -> CSS 
    -> javascript

## Reactjs Concept Used: 

-> Hooks

React hooks are the built-in react components used to rerender the component when some state changes in that component.

I have used useState Hook to change the state dynamically when the user inputs some data. 
   
-> Two-way Data Binding Binding:

The  concept of two-way binding is used when the user enters data and then using the useState hook at the same time we change the value of the input field 

-> Lifting Up the State:

Lifting up the state means getting some data from the child component to the parent component using the callback function.
In this project, we have lifted up the state from Calculator_input component to the App component.


-> Conditional Rendering: 
   
I have used conditional rendering while rendering the result table if the duration interned in the input field is less than zero then it will show some message to enter the valid value 




## Live Project link: 

https://investment-calculator-rose.vercel.app/  

   ![Screen shot of the live project ](https://github.com/GajendraKaushik/InvestmentCalculator/assets/119392005/8309d9c9-88e5-46e8-8657-70879d835c57)
