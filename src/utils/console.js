export function log(data, ...rest) {
    if (import.meta.env.VITE_ENV === "development") {
        console.log(data, ...rest)
    }
}

export function trace(data, ...rest) {
    if (import.meta.env.VITE_ENV === "development") {
        console.trace(data, ...rest)
    }
}

export function warn(data, ...rest) {
    if (import.meta.env.VITE_ENV === "development") {
        console.warn(data, ...rest)
    }
}

export function error(data, ...rest) {
    if (import.meta.env.VITE_ENV === "development") {
        console.error(data, ...rest)
    }
}