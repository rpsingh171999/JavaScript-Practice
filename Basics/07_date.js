let newDate = new Date();

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate.getDay())