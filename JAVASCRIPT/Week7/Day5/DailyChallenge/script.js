function isAnagram(stringA, stringB) {
    
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, ""); //regexr replace, [] characterset, \W not Words ,_ character matches underscore, g globally 
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");
  
 
    const stringASorted = stringA.split("").sort().join(""); //split words in individual characters, sort sorts from a to z, join puts back together as string
    //console.log(stringASorted)
    const stringBSorted = stringB.split("").sort().join("");
  
    return stringASorted === stringBSorted;
  }

