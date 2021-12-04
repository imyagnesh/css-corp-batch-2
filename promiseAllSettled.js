const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("rejected user data");
        }, 0)
        
    })
}

const instaFeed = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("right side data succeeded");
        }, 0)
        
    })
}
const res = await Promise.allSettled([    
    userData(),
    instaFeed()
])
console.log(res);

for(let i=0;i<res.length;i++) {
    if(res[i].status == "rejected") {
        if(`${res[i]}`.indexOf("user") != -1) {
            console.log("user rejected");
            //display error on the entire page.
            break;
        }
        else if(`${res[i]}`.indexOf("insta") != -1) {
            console.log("Instafeed rejected");
            //display error on the instapart.
            break;
        }            
        
    }
}