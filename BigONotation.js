// Big O Notation


const arr = [1,2,3,4,5];

// O(N) -> N

// O(logN) -> > 1 < N

// O(1) -> 

// O(n**2)
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    if(arr[i] === 2) {
        break;
    }
}

