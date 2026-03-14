import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import BackBtn from '../../../../assets/icon/back-button.png'
const ProductWarrantyDetailsForm = ({ handleBackFormRendering }) => {
  return (
    <form className="max-w-sm mx-auto">
      <button type='button' onClick={handleBackFormRendering}><img src={BackBtn} alt='back button' /></button>
      <div>
        <h1 className="text-lg font-bold">Product Warranty Details</h1>
      </div>

      <InputField
        type="text"
        name="warranty_period"
        labelName="Warranty Period"
      />
      <InputField
        type="date"
        name="warranty_start_date"
        labelName="Warranty Start Date"
      />
      <InputField
        type="date"
        name="warranty_end_date"
        labelName="Warranty End Date"
      />
    </form>
  );
};

ProductWarrantyDetailsForm.propTypes = {
  handleBackFormRendering: PropTypes.func.isRequired,
};
export default ProductWarrantyDetailsForm;
