const constitutionPreamble = ["We", "the", "kick", "People", "of", "the", "United", "States,", "king", "in", "Order", "to", "form", "a", "more", "perfect", "Union,", "establish", "Justice,", "kat", "insure", "domestic", "Tranquility,", "provide", "for", "kid", "kill", "the", "common", "defence,", "kountry", "promote", "the", "general", "Welfare,", "and", "secure", "kandykorner", "the", "Blessings", "of", "Liberty", "to", "ourselves", "koala", "and", "our", "Posterity,", "do", "ordain", "and", "establish", "this", "Constitution", "kidzKorner", "for", "the", "kraazyy", "United", "States", "of", "America."]

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const filterOutKWords = (arrayOfWords) => {
    let wordsWithoutK = []
    //using a for...of this time to push non-k words to wordsWithoutK array
    for (const word of arrayOfWords) {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    }
    return wordsWithoutK
}


//SAME FUNCTION AS ABOVE BUT WRITTEN WITH A FOREACH
//declaring the function
const filterOutKWordsWithForEach = (arrayOfWords) => {
    let wordsWithoutK = []
    //using a forEach this time to push non-k words to wordsWithoutK array
    arrayOfWords.forEach((word) => {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    });
    return wordsWithoutK
}
//invoking and giving the function the ACTUAL array of words
filterOutKWordsWithForEach(constitutionPreamble);


/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */

const singleStringBuilder = (arrayOfStrings) => {
    let joined = arrayOfStrings.join(" ")
    return joined
}


/*
    Invoke the filtering function and store its return value
 */
let filteringFunctionForWordsArray = filterOutKWords(words)
let filteringFunctionForConstitutionPreambleArray = filterOutKWords(constitutionPreamble)

/*
   Invoke the string building function, and pass the
   return value of the previous function as an argument
*/
console.log(singleStringBuilder(filteringFunctionForWordsArray))
console.log(singleStringBuilder(filteringFunctionForConstitutionPreambleArray))



//example of random function with 3 parameters
const tellMeAboutYourDog = (name, genderProunoun, weight) => {
    console.log(`My dog weighs ${weight} lbs, and ${genderProunoun} name is ${name}.`)
}

tellMeAboutYourDog("Roscoe Dash", "his", 90)