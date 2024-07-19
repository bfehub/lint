// ❌
// import b from 'b'
// import a from 'a'
// console.log(a, b)

// ✅
import a from 'a'
import b from 'b'
console.log(a, b)

// ❌
// const eslintBasic = "hello"

// ✅
const eslintBasic = 'hello'
console.log(eslintBasic)

// ❌
// new Promise((xxx, yyy) => {
//   window.true ? xxx() : yyy()
// })

// ✅
new Promise((resolve, reject) => {
  window.true ? resolve() : reject()
})
