
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#e9ecef",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative", // Allows positioning of the percentage text
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#007bff",
          position: "relative", // Allows absolute positioning of the percentage text
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;