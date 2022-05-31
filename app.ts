const person: {
    name: string;
    age: number;
    hobbies: (string | number | string | boolean | {isImage: boolean; imageSize: string;})[];
    role: [number, string]
} = {
    // const person = {
    name: 'Ali Haider Nadeem',
    age: 27,
    hobbies: ['sports', 1, 'cooking', true, {isImage: true, imageSize: '500px'}],
    role: [2, 'administrator']
}

console.log(person.role);

for (let hobby of person.hobbies) {
    // console.log(hobby);
    if (typeof hobby === 'object') {
        console.log(hobby.imageSize);
    }
}