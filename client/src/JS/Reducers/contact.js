const { GET_CONTACT_SUCCESS, GET_CONTACT_LOAD, GET_CONTACT_FAIL, GET_ONE_CONTACT } = require("../Constants/contact");

const initialState={
    contacts:[],
    isLoad:false,
    isError:false,
    contact:{}
}

const contactReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_CONTACT_SUCCESS:
            return {...state,contacts:payload.users,isLoad:false,isError:false}
            
        case GET_ONE_CONTACT:
            return {...state,contact:payload.user,isLoad:false,isError:false}

        case GET_CONTACT_LOAD:
            return {...state,isLoad:true,isError:false}
        
        case GET_CONTACT_FAIL:
            return {...state,isLoad:false,isError:true}
        
        default:
            return state
    }
}

export default contactReducer