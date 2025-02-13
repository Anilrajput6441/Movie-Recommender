import { createContext } from "react";

import React from 'react'

export const movieContext = createContext(
    {
        favourites:0,
        setFavourites:(f)=>{console.log(f)}
    })