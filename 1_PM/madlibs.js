/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */


const noun1 = "computer"
const location1 = "school"
const noun2 = "cat"
const groupOfPeople = "hunters"
const movingVerb = "sitting"
const landscape = "mountains"
const noun3 = "coffee"
const place = "school"

/*Change thses values to generate a different story
*/

const story = `
Sarah could belive what her eyes were seeing. It was a(n) 
${noun1}! She had never seen one before during her time in 
${location1}, so she took a picture using her ${noun2} and 
shared it with her ${groupOfPeople}. She ${movingVerb} through 
the ${landscape} and decided she would keep it to use it as 
a ${noun3}. Sarah realized she had just discovered the best ${noun3}, 
so she quit her job at ${place} and became a trillionaire from 
selling ${noun1}s on Amazon. 
`

console.log(story)
