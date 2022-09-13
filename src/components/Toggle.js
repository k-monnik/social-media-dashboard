
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Toggle() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <div className="md:-mt-14 mx-8  pt-3 md:pt-0 cursor-pointer">
                <div className="flex justify-between md:justify-end">
                    <label htmlFor="toggle-switch" className="text-sm font-bold text-medGrey dark:text-white pr-4">Dark Mode</label>
                    <div className="md:mr-24">
                        <input className="cursor-pointer h-6 w-12 rounded-full appearance-none bg-toggle-green checked:bg-toggle-grey transition duration-200 relative" type="checkbox" id="toggle-switch" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Toggle;
