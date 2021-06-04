const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (array) => {
    return new Promise((resolve,reject)=>{
        let capsArray = array.map(word=>{
            if(typeof word === 'string'){
                return word.toUpperCase();
            }
            else{
                reject('error: Not all words in the array are strings')
            }
        })
        resolve(capsArray)
    })

}


const sortWords = (array) => {
   return new Promise((resolve,reject) => {
       if(array){
            resolve(array.sort());
       }
       else{
           reject('error: sorry something went wrong')
       }
   })
}



makeAllCaps(arrayOfWords)
.then(res=> {
    return sortWords(res)
})
.then(res=> {
    console.log(res);
})
.catch(err=> {
    console.log(err);
})