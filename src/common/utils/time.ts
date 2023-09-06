import Constants from "./Constants";

export function getCurrentDateString() {
    const now = new Date();
    const monthShortName = Constants.months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    return `${monthShortName} ${date}, ${year}`;
}
