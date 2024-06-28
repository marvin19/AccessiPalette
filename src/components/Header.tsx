import logo from '../assets/highcharts-logo.svg';
import ContrastSelectTab from './ContrastSelectTab';
import ContrastModeTab from './ContrastModeTab';

const Header = (): JSX.Element => {
    return (
        <div className="banner">
            <div className="inside-banner">
                <div className="logo-img">
                    <img src={logo} className="logo" alt="Highcharts logo" />
                </div>
                <ContrastSelectTab />
                <ContrastModeTab />
            </div>
        </div>
    );
};

export default Header;
