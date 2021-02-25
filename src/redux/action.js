    export function addUser(post) {
    return {
    type: 'ADD_USER',
    post
    }
    }
    export function updateCurrentUser(user) {
    return {
    type: 'UPDATE_CURRECT_USER',
    user
    }
    }
    export function updatePassword(password) {
        return {
        type: 'UPDATE_PASSWORD',
        password
        }
        }
    
        