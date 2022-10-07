const Check = ({ strokeColor = "#aacc88" }) => {
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={9.5}
      stroke={strokeColor}
    />
    <path
      d="m6.25 10 2.5 2.5 5-5"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
};

export default Check;
