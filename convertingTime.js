/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000*/


function past(h, m, s){
    let hours = h * (3.6e+6)
    let minutes = m * 60000
    let seconds = s * 1000
    return hours + minutes + seconds
  }
