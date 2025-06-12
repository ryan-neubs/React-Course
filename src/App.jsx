export default function App() {
    const array1 = [1, 2, 3, 4, 5].map(x => x * x);
    const names = ["alice", "bob", "charlie", "danielle"].map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    })
    return (
        <>
            <h1>{array1}</h1>
            <h1>{names}</h1>
            {["Ryan", "Carlo", "Brody"].map(name => <p>{name}</p>)}
        </>
    )
}
