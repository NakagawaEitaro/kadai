//throwの使い方

const isEven = (number) => {
    if(number % 2 === 0) {
        console.log("偶数です")
    } else {
        throw new Error("偶数ではありません")
    }
}
isEven(11)