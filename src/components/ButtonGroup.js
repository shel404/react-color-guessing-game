const ButtonGroup = ({ colorCode }) => {
  const opt1 = "#abfaed";
  const opt2 = "#abfa09";
  return (
    <div className="button-group">
      <button value={opt1}>{opt1}</button>
      <button value={colorCode}>{colorCode}</button>
      <button value={opt2}>{opt2}</button>
    </div>
  );
};

const generateColorCode = () => {};

export default ButtonGroup;
