import { apiSlice } from "./apiSlice";
import { GENRES_URL } from "../constants";

export const genreApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createGenre:builder.mutation({
            query:(newGenre)=>({
                url:`${GENRES_URL}`,
                method:"POST",
                body:newGenre
            }),
        }),
        updateGenre:builder.mutation({
            query:({id,updateGenre})=>({
                url:`${GENRES_URL}/${id}`,
                method:"PUT",
                body:updateGenre
            }),
        }),
        deleteGenre:builder.mutation({
           query:(id)=>({
             url:`${GENRES_URL}/${id}`,
             method:"DELETE"
           }), 
        }),
        fetchGenres:builder.query({
            query:()=>`${GENRES_URL}/genres`
        })
    })
})

export const {useCreateGenreMutation,useUpdateGenreMutation,useDeleteGenreMutation,useFetchGenresQuery} = genreApiSlice