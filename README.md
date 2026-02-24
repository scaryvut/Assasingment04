1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: Main difference between getElementById and getElementByClassName is First one work with any id within tag and second one work with any class within id manipulate a object in website develop. 
On the other hand querySelector and querySelectorAll is first one matching first element only and second one matching all elements.

2. How do you create and insert a new element into the DOM?
Ans: Firstly create a element like const div=document.createElement("div") and then config it. After the config append it with childnode.

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is travel a website root to leaf and leaf to root. That means when we click on a website its travel parentnode to every child node like bubble frequency.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a pattern where I attach a eventListener and it bubbling parentNode to childNode. It is useful because Its make elements are dynamic.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: event.preventDefault() This method stops the default action associated with an event from occurring. The event itself, however, continues to propagate through the DOM as usual.