export const a = "hello a from app.js";

export const b = 'hello b from app.js';

export const d = a ?? b;

export default (p, q) => p + q;

// per file export only 1 default
// export default sum;
