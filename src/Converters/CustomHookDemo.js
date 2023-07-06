import useFetch from "./useFetch";

export default function CustomHookDemo() {
    let quote = useFetch('https://catfact.ninja/fact')
    return (
        <>
            <h2>Today's fact about Cat</h2>
            <p>{quote && quote.fact}</p>
        </>
    );
}
