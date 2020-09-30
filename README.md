# hw_CodingQuiz

# Coding Quiz with a timer, and highscore tracking

## Homework assignment for 9/30

## Info:
This assignment was an excercise mainly in javascript, although the html page had to be built from scratch. For all of the seperate parts of this page to work, I had to utilize interval functions, event listeners, and the ability to traverse the DOM from within my script.
As well, the solution I came up with for checking the correct answer is inelegant, and requires a lot of copy and paste to add more questions to the quiz. If I was to do it again, I would use an object with objects inside for the questions/answers, rather than an array. Having custom classes on those objects would go a long way towards shortening my current solution, which is adding and removing eventlisteners as they're need for a particular question

## Some Problems Faced:
One of the minor ones was getting local storage to work correctly. I also learned through many errors, that event listeners added to an element persist, and can be stacked on top of one another. This led to me getting multiple correct and incorrect responses at the same time, for every question after the first.

### Github Pages Link
https://matt-boggs.github.io/hw_CodingQuiz/
# To do
