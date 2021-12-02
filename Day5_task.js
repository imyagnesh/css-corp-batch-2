const userInfo = new Promise((resolve, reject) => setTimeout((promiseName) => {
  reject({
    'promiseName': promiseName,
    'reason': 'User Info rejected'
  });
}, 2000, 'userInfo'));

const InstaData = new Promise((resolve, reject) => setTimeout((promiseName) => {
  resolve({
    'promiseName': promiseName,
    'reason': 'Insta feed rejected'
  });
}, 2000, 'InstaData'));

const promises = [userInfo, InstaData];

const res = Promise.allSettled(promises).
  then((results) => results.forEach((result) => {
    if (result.reason && result.reason.promiseName === 'userInfo') {
      throw new Error('Show error in full screen');
    }
    if (result.reason && result.reason.promiseName === 'InstaData') {
      throw new Error('Show error in insta section');
    }
    console.log(result);
  } ));

console.log(res);