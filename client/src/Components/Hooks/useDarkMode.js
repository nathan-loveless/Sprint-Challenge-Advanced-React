import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';
import '../../App.css';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const element = document.querySelector('body');
        if(value === true) { element.classList.remove('dark-mode')}
        
        else { element.classList.add('dark-mode')}
    }, [value])

    return [value, setValue];
}