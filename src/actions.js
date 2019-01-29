import ZAFClient from './misc/ZAFClient';

export const actions = {
    RESET_STORE: 'RESET_STORE',
};

export const setAppHeight = height => {
    ZAFClient.invoke('resize', { width: '100%', height: (height) + 'px' });
};

export const resetStore = () => ({
    type: actions.RESET_STORE,
});
