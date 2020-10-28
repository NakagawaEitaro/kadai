// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 1) {
    console.log('あなたは控えめな性格です')
} else if (day % 3 === 1) {
    console.log('あなたは欲張りな性格です')
} else {
    console.log('あなたは頑固な性格です')
}