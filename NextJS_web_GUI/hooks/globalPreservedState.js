import useGlobalStorage from 'use-global-storage';

const { setGlobalPreservedState, useGlobalPreservedState } = useGlobalStorage({
    storageOptions: { name: 'preserved-storage-db' }
});
export { useGlobalPreservedState, setGlobalPreservedState };