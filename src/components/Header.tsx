import logo from '../assets/highcharts-logo.svg';

const Header = (): JSX.Element => {
    return (
        <div className="banner">
            <img src={logo} className="logo" alt="Highcharts logo" />
        </div>
    );
};

export default Header;
