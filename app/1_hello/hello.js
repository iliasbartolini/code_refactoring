export default function hello(name) {
    const sayHelloTo = (name === undefined) ? "World" : name;
    return `Hello, ${sayHelloTo}`;
}
