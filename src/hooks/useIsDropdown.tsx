import { useState, useEffect } from 'react';

const useIsDropdown = (breakpoint: number): boolean => {
    const [isDropdown, setIsDropdown] = useState(false);

    useEffect(() => {
        const handleResize = (): void => {
            setIsDropdown(window.innerWidth < 1350);
        };

        const debounceResize = (): void => {
            setTimeout(handleResize, 100);
        };

        window.addEventListener('resize', debounceResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', debounceResize);
        };
    }, [breakpoint]);

    return isDropdown;
};

export default useIsDropdown;
