import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: 'movies',
    initialState:{
      moviesFilter:{
        searchTerm:"",
        selectedGenre:"",
        selectedYear:"",
        selectedSort:[]
      },
      filteredMovies:[],
      moviesYears:[],
      uniqueYears:[],
    },

    reducers:{
        setMoviesFilter:(state,action)=>{
            state.moviesFilter = {...state.moviesFilter, ...action.payload}
        },
        setFilteredMovies:(state,action)=>{
          state.filteredMovies = action.payload
        },
        setMoviesYears:(state,action)=>{
            state.moviesYears = action.payload
        },
        setUniqueYears:(state,action)=>{
            state.uniqueYears = action.payload
        }
    }
})

export const {
    setMoviesFilter,
    setFilteredMovies,
    setMoviesYears,
    setUniqueYears
} = movieSlice.actions

export default movieSlice.reducer