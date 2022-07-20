import {
    SET_LAYOUT
} from './types'

import React from "react";

export const setLayout = (payload: React.ReactNode) => {
    return {
        type: SET_LAYOUT,
        payload
    }
}

