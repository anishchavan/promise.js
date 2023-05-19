//promise

const makePromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let arr = ['html','css','js','nodejs']
        if(arr.length > 3){
            resolve('promise fullfilled')
        }else{
            reject('promise rejected')
        }
    }, 3000);
})

makePromise.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});