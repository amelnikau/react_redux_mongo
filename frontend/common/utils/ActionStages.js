export function request(type, info) {
    return {type, info}
}

export function success(type, payload) {
    return {type, payload}
}

export function failure(type, error) {
    return {type, error}
}