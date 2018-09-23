/*
* Takes a string as an argument and returns it in all caps: 'hello' to "Hello"
*/

function shout(string) {
  return string.toUpperCase() 
}

<<<<<<< HEAD
/*
* Takes a string as an argument and returns it in all lowercase: 'Hello' to "hello"
*/

=======
>>>>>>> 0740a6584af8df78f424d6b51a1f62536e01ec74
function whisper(string) {
  return string.toLowerCase()
}

<<<<<<< HEAD
/*
* Takes a string as an argument and logs it in all caps: 'hello' to "Hello"
*/

function logShout(string) {
  console.log(string.toUpperCase())
}

/*
* Takes a string as an argument and logs it in all lowercase: 'Hello' to "hello"
*/

function logWhisper(string) {
  console.log(string.toLowerCase())
}

/*
* Takes a string as an argument and:
* 1) if the string is all lowercase, returns "I can't hear you!" 
* 2) if the string is all uppercase, returns "YES INDEED!"
* 3) if the string is "I love you, Grandma." returns "I love you, too."
*/

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    return `I can\'t hear you!`
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
=======
function sayHiToGrandma(string) {
  
>>>>>>> 0740a6584af8df78f424d6b51a1f62536e01ec74
}