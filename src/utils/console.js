export function log(data) {
    if (import.meta.env.VITE_ENV === "development") {
        console.log(data)
    }
}

export function trace(data) {
    if (import.meta.env.VITE_ENV === "development") {
        console.trace(data)
    }
}

export function warn(data) {
    if (import.meta.env.VITE_ENV === "development") {
        console.warn(data)
    }
}