//TODO: add https://medium.com/ringcentral-developers/use-react-hooks-with-storage-as-global-state-management-f2945492aade
//TODO: install use-global-storage

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
    enableSnowBG: true,
    darkMode: true,
    enableAnimations: true,
    notSupportedOpen: false,
});
export { useGlobalState, setGlobalState };