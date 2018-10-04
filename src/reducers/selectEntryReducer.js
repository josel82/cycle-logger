
const selectEntryReducerDefaultState = {}

const selectEntryReducer = (state = selectEntryReducerDefaultState, action) => {
    switch(action.type){
        case 'SELECT_ENTRY':
            return {
               id: action.id
            }
        case 'CLEAR_SELECTED':
            return {}
        default:
            return state;
    }
}

export default selectEntryReducer;