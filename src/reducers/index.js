import {
    // SUBMIT_MOMENT,
    SHOW_PHOTOS,
    HANDLE_LOGIN,
    HANDLE_LOGOUT,
    IS_MOBILE,
    BURGER_MEMU
} from '../actions'

let initState ={
    photos: [],
    auth: false,
    mobile: false,
    burgerMemu: false
}

export const myReducer = (state=initState, action) =>{
    switch (action.type) {
        // case SUBMIT_MOMENT:
        //     fetch('http://localhost:8000/api/moment', {
        //         method: 'POST',
        //         body: action.formdata
        //     })
        //     .then(res=>{
        //         if(!res.ok) {
        //         return Promise.reject({
        //             status: res.status
        //         })
        //         }
        //         return res.json()
        //     })
        //     .then(resJSON=>{
        //         console.log(resJSON)
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        //     return state;
        case SHOW_PHOTOS:
            return Object.assign({}, state, {photos: [...new Set([...state.photos, ...action.photosURL])]})
        case BURGER_MEMU:
            return Object.assign({}, state, {burgerMemu: action.toggle})
        case IS_MOBILE:
            return Object.assign({}, state, {mobile: action.isMobile})
        case HANDLE_LOGIN:
            document.cookie = `user=${action.userInfo.name};max-age=86400;path=/`
            // document.cookie = `authToken=${resJSON.authToken};max-age=86400;path=/`
            return Object.assign({}, state, {auth: true})
        case HANDLE_LOGOUT:
            document.cookie = `user=;max-age=0;path=/`
            return Object.assign({}, state, {auth: false})
        default:
            return state
    }
}