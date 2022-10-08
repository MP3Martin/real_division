import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    input1: '',
    input2: '',
    isJsrunpyLoading: true,
    isCalculating: false,
    answer: "This website is WORK IN PROGRESS!",
});
export { useGlobalState, setGlobalState };