const ProgressBar = ({ bgColor, completed, title }) => {
  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "rgb(70, 81, 94)",
    borderRadius: 50,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const progressTitle = {
    fontSize: "1.5rem",
    margin: "0 0px 0 20px",
    fontWeight: "bold",
    color: "rgb(86, 99, 100)",
  };

  return (
    <>
      <h1 style={progressTitle}> {title} </h1>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
