import logo from '../assets/highcharts-logo.svg';
import ContrastSelectTab from './ContrastSelectTab';
import ContrastModeTab from './ContrastModeTab';
import GitHubLink from './GitHubLink';
import PalettaLogo from './PalettaLogo';

interface HeaderProps {
    setSelectedContrast: (value: number) => void;
    setSelectedMode: (value: string) => void;
}

const Header = ({
    setSelectedContrast,
    setSelectedMode,
}: HeaderProps): JSX.Element => {
    return (
        <div className="banner">
            <div className="inside-banner">
                <div className="logo-img">
                    <img src={logo} className="logo" alt="Highcharts logo" />
                </div>
                <ContrastSelectTab setSelectedContrast={setSelectedContrast} />
                <ContrastModeTab setSelectedMode={setSelectedMode} />
                <div className="link-and-logo">
                    <GitHubLink />
                    <PalettaLogo />
                </div>
            </div>
        </div>
    );
};

export default Header;
