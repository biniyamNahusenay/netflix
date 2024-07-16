import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";
import { logout } from "../features/auth/authSlice";

export const useApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/login`,
                method:'POST',
                body:data
            })
        }),
       
       register:builder.mutation({
         query:(data)=>({
            url:`${USERS_URL}`,
            method:"POST",
            body:data,
         })
       }),
       logout:builder.mutation({
         query:()=>({
            url:`${USERS_URL}/logout`,
            method:"POST",
         })
       }),
       profile:builder.mutation({
        query:(data)=>({
          url:`${USERS_URL}//profile`,
          method:"PUT",
          body:data,
        })
       })
    })
})

export const {useLoginMutation,useRegisterMutation,useLogoutMutation,useProfileMutation} = useApiSlice