// const person: {
//     name: string;
//     age: number;
// } = {
    const person = {
    name: 'Ali Haider Nadeem',
    age: 27,
    hobbies: ['sports', 1, 'cooking', true, {isImage: true, imageSize: '500px'}]
}

// console.log(person.age);

for (let hobby of person.hobbies) {
    // console.log(hobby);
    if (typeof hobby === 'object') {
        console.log(hobby.imageSize);
    }
}