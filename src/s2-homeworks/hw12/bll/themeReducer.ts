const initState = {
    themeId: 1
}
export type initStatePropsType = {
    themeId: number
}
type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): initStatePropsType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
