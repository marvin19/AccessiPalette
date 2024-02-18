const ContrastSelect = ({
  selectedContrast,
  setSelectedContrast,
}): JSX.Element => {
  const handleSelectChange = (e): void => {
    setSelectedContrast(Number(e.target.value));
  };

  const generateOptions = (): JSX.Element => {
    const options = [4.5, 3];
    return (
      <select
        className="select mtb-2"
        onChange={handleSelectChange}
        value={selectedContrast} // Set the current value to reflect the selectedOption prop
        aria-label="Select contrast ratio"
      >
        {options.map((option) => (
          <option key={option} value={option}>{`${option}:1`}</option>
        ))}
      </select>
    );
  };

  return <div className="select-container">{generateOptions()}</div>;
};

export default ContrastSelect;
