import PropTypes from "prop-types";

const FormHandlingButton = ({ buttonName, btnStyle }) => {
  return (
    <button type="submit" className={btnStyle}>
      {buttonName}
    </button>
  );
};

FormHandlingButton.propaTypes = {
  buttonName: PropTypes.string.isRequired,
  btnStyle: PropTypes.func.isRequired,
};

export default FormHandlingButton;
