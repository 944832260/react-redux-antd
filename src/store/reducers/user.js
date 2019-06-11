
export default function Headmsg(state = {}, action) {
 let obj = JSON.parse(JSON.stringify(action));
    delete obj.type;
    switch (action.type) {
        // 用户登录
        case 'CHANGE_HEAD':
            return obj;
        default:
            return state;
    }
}