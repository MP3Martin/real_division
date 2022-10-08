import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    input1: '',
    input2: '',
    isJsrunpyLoading: true,
    isCalculating: false,
    answer: ["The result will appear here.", false],
    rdc: "",
});
export { useGlobalState, setGlobalState };