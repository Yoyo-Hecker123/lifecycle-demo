export function handleMount(setState) {
    alert("this is react");
    setTimeout(() => {
        setState({
            value: "thankyou"
        });
    }, 5000);
}
