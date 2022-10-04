import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    input1: '',
    input2: ''
});
export { useGlobalState, setGlobalState };