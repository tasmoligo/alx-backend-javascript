export default function returnHowManyArguments(...suppliedArgs) {
    let supplied = 0;
    for (let arg of suppliedArgs) {
        supplied += 1;
    }
    return supplied;
}