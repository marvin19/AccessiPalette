import { useState } from 'react';
import logo from '../assets/highcharts-logo.svg';
import onlyLogo from '../assets/highcharts-only-logo.svg';
import ContrastSelectTab from './ContrastSelectTab';
import ContrastModeTab from './ContrastModeTab';
import GitHubLink from './GitHubLink';
import PalettaLogo from './PalettaLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    setSelectedContrast: (value: number) => void;
    setSelectedMode: (value: string) => void;
}

const Header = ({
    setSelectedContrast,
    setSelectedMode,
}: HeaderProps): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="banner">
            <div className="inside-banner">
                <div className="logo-img">
                    <img src={logo} className="logo" alt="Highcharts logo" />
                    <img
                        src={onlyLogo}
                        className="only-logo"
                        alt="Highcharts logo"
                    />
                </div>
                <ContrastSelectTab setSelectedContrast={setSelectedContrast} />
                <ContrastModeTab setSelectedMode={setSelectedMode} />
                <div className="link-and-logo">
                    <a href="#" className="icon-wrapper">
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            style={{ color: '#000000' }}
                        />
                    </a>
                    <GitHubLink />
                    <PalettaLogo />
                    <FontAwesomeIcon
                        icon={faBars}
                        className="hamburger-icon"
                        onClick={toggleMenu}
                        style={{ color: '#000000' }}
                    />
                </div>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <ContrastSelectTab
                        setSelectedContrast={setSelectedContrast}
                    />
                    <ContrastModeTab setSelectedMode={setSelectedMode} />
                </div>
            )}
        </div>
    );
};

export default Header;
