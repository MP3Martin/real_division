import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    input1: '',
    input2: '',
    isJsrunpyLoading: true,
    isCalculating: false,
    answer: ["The result will appear here.", false],
    rdc: "",
    answerFirstTime: true,
    outputHeight: 0,
    inp1mounted: false,
    dotsLoading: "...",
    //1. - showError, 2. - errorReason, 3. - disableAnswerButton
    inpError: [false, "", true],
    outputTextSize: 875,
    outputOptionsHaveAcordicon: false,
});
export { useGlobalState, setGlobalState };