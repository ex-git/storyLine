
// export const SUBMIT_MOMENT = 'SUBMIT_MOMENT';
// export const submitMoment = formdata => ({
//     type: SUBMIT_MOMENT,
//     formdata
// });

export const HANDLE_LOGIN = 'HANDLE_LOGIN'
export const handleLogin = userInfo => ({
    type: HANDLE_LOGIN,
    userInfo
})

export const HANDLE_LOGOUT = 'HANDLE_LOGOUT'
export const handleLogout = () => ({
    type: HANDLE_LOGOUT
})

export const IS_MOBILE = 'IS_MOBILE'
export const isMobile = isMobile => ({
    type: IS_MOBILE,
    isMobile
})

export const BURGER_MEMU = 'BURGER_MEMU'
export const burgetMemu = toggle => ({
    type: BURGER_MEMU,
    toggle
})

export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const fetchPhotos = () => async dispatch => {
    let photos = new Set()
    fetch('https://picsum.photos/list')
    .then(res=>{
        if(!res.ok) {
            return Promise.reject({
                status: 'error'
            })
        }
        return res.json()
    })
    .then(resJSON=>{
        for(let counter=0; counter<18; counter++) {
            fetch(`https://picsum.photos/900/600?image=${resJSON[Math.floor(Math.random()*resJSON.length)].id}`)
            .then(res=>{
                if(!res.ok) {
                    return Promise.reject({
                        status: 'error'
                    })
                }
                photos.add(res.url)
                dispatch(showPohtos(photos))
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    
    
    
}

export const SHOW_PHOTOS = 'SHOW_PHOTOS'
export const showPohtos = photosURL => ({
    type: SHOW_PHOTOS,
    photosURL
})