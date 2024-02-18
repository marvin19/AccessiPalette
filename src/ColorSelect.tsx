const ColorSelect = ({ selectedOption, setSelectedOption }): JSX.Element => {
  const handleSelectChange = (e): void => {
    setSelectedOption(Number(e.target.value));
  };

  const generateOptions = (): JSX.Element => {
    const options = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <select
        className="select mtb-2"
        onChange={handleSelectChange}
        value={selectedOption} // Set the current value to reflect the selectedOption prop
        aria-label="Select number of colors"
      >
        {options.map((option) => (
          <option key={option} value={option}>{`${option} colors`}</option>
        ))}
      </select>
    );
  };

  return <div className="select-container">{generateOptions()}</div>;
};

export default ColorSelect;
