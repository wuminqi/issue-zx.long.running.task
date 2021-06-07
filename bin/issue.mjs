#!/usr/bin/env zx

console.log('before ~')
await $`nohup ./bin/sleep.mjs &`
console.log('after ~')
