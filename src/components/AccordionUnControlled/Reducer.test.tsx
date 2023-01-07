import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', () => {

    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})