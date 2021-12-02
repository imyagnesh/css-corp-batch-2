

const userInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User infomation")
            // reject("user info rejected")
        }, 1000)
        
    });
}

const instaFeeds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Insta feeds")
            reject("Insta feeds fail")
        }, 2000)
    });
}

const loadInfo = async () => {
    try {

        const promises = [
            userInfo(),
            instaFeeds()
        ]

        const res = await Promise.allSettled(promises)

        if(res[0].status === "rejected") {
            throw new Error("Display error in full screen")
        } else if(res[1].status === "rejected") {
            // write a code to dipslay error message in Main section
        } else {
            // display data;
        }

    } catch (error) {
        console.log(error);
    }
}

loadInfo();