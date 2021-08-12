const url = require('url')

const myUrl = new URL('https://www.barrynguyen.com/about-barry-nguyen-health-tech-entrepreneur.html')

//Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)

// Hostname (does not get port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

//Serialised query - everything after question mark
console.log(myUrl.searchParams)

//Params object
console.log(myUrl.searchParams)

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); 

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))