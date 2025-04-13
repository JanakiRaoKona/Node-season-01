const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2000


crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 1 secret");
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 2 secret");
});
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 3 secret");
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 4 secret");
});
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 5 secret");
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
    console.log("Password 6 secret");
});