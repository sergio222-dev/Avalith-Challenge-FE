import { useBreakpoints as useBreakpointsLibrary } from 'react-breakpoints-hook';
export const useBreakpoints = () => { 
    return useBreakpointsLibrary({
        xs: {min: 0, max: 575 },
        sm: {min: 575, max: 767},
        md: {min: 768, max: 991},
        lg: {min: 992, max: 1199},
        xl: {min: 1200, max: 1399},
        xxl: {min: 1400, max: null}
    });
};