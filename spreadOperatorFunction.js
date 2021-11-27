const add = (...data) => {
    console.log(data);
    let result  = 0;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        result = result + element;
    }

    return result;
    // return a + b + c;
}

console.log(add());