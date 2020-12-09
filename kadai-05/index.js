const profile = {
    name : 'nakagawa',
    age : 21,
    hobby : 'photography',
    major : 'european history',
    gender : 'Male',
    hometown : 'hiroshima'
}
const keys = Object.keys(profile)
console.log(keys)

for(let index = 0; index < keys.length; index = index + 1){
    const key = keys[index]
    const value = profile[key]
    console.log('私の' + key + 'は' + value + 'です。' )
}