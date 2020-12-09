const object = {
    species: "cat",
    name: "Tama"
}
const jsonstring = JSON.stringify(object)
console.log(jsonstring === '{"species":"cat","name":"Tama"}')

const parsed_object = JSON.parse(jsonstring)
console.log(parsed_object)
console.log(parsed_object.name)