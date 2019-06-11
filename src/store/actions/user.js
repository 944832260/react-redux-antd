export function changeHead(obj) {

    return {
        type: 'CHANGE_HEAD',
        ...obj
    }
}