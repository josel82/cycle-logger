import authReducer from '../../reducers/auth';


test('should return default value', ()=>{
    const action = {
        type: '@@INIT'
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
});

test('should set user id upon login', ()=>{
    const uid = '2h2g2g2fn236ed8d9s76wt';
    const action = {
        type: 'LOGIN',
        uid 
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid});
});

test('should clear user id upon logout', ()=>{
    const currentState = {uid:'2h2g2g2fn236ed8d9s76wt'}
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(currentState, action);
    expect(state).toEqual({});
});