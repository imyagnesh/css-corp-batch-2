

// Promises

// Pending

// Resolved

// rejected

// OAUTH2


// If promise is not resole or reject that is pending state
const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("accessToken")
        }, 1000)
        //  requirest to database for get data
        // resolve("p1 resolve")
        // reject("p1 rejected")
    })
}

const users = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("token is not available")
        }
        setTimeout(() => {
            resolve("User data");
        }, 2000)
        
    })
}


const lsData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("left side data");
        }, 1000)
        
    })
}

const mainData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("main data");
        }, 2000)
        
    })
}

const rsData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("right side data");
        }, 3000)
        
    })
}


// ES8+
const loadData = async () => {
    try {
        console.time("async")

        const res = await Promise.all([
            lsData(),
            mainData(),
            rsData()
        ])

        console.log(res);
        // const lsRes = await lsData();
        // const mainRes = await mainData();
        // const rsRes = await rsData();
        // console.log(lsRes);
        // console.log(mainRes);
        // console.log(rsRes);
        console.timeEnd("async")
    } catch (error) {
        console.log(error);
    }
}

loadData();

// const loadData1 = async () => {
//     try {
//         await loadData();
//     } catch (error) {
        
//     }
// }



// Old Javascript
// login()
// .then(val => {
//     console.log(val);
//     users(val)
//     .then(val1 => {
//         console.log(val1);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// console.log(val);

// console.log("s1")
// p1()
// .then((val) => {
//     console.log(val);
// })
// .catch((err) => {
//     console.log(err);
// })

// console.log("s2")