export const state = () => ({
    loggedIn: false,
    userDetails: {},
    bearerToken: '',
    loginError: '', 
    registerRes: {}
});

export const mutations = {
    SET_TOKEN(state, bearerToken) {
        state.bearerToken = bearerToken;
        state.loggedIn = true;
        state.loginError = '';
    },
    UPDATE_ERROR(state, errMsg) {
        state.loginError = errMsg;
        state.bearerToken = '';
        state.loggedIn = false;
        state.registerRes = {};
    }, 
    SET_REGISTER_MESSAGE(state, registerMsg){
        state.registerRes = registerMsg;
    }
};

export const actions = {
    LOGIN({
        commit
    }, loginRequest) {
        this.$axios.$post('account/login', loginRequest)
            .then((res) => {
                commit('SET_TOKEN', res.data);
            })
            .catch((err) => {
                commit('UPDATE_ERROR', err.response.data.responseMessage);
            });
    },
    REGISTER({
        commit
    }, loginRequest) {
        this.$axios.$post('account/register', loginRequest)
            .then((res) => {
                commit('SET_REGISTER_MESSAGE', res);
            })
            .catch((err) => {
                commit('UPDATE_ERROR', err.response.data.data);
            });
    }
};

export const getters =  {
    getLoginError: (state) => {
        if(Array.isArray(state.loginError)){
            return state.loginError[0];
        }
        else 
        {
            return state.loginError;
        }
    }, 
    getRegisterRes: (state) => {
        return state.registerRes;
    }
};