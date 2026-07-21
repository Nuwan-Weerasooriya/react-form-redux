import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";

const ProductBasicDetailsForm = ({ handleNextFormRendering }) => {
  return (
    <form className="max-w-sm mx-auto">
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField
        type="text"
        name="product_name"
        labelName="Product Name"
      />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
      />

      <FormHandlingButton
        executingMethod={handleNextFormRendering}
        buttonName="Fill Warranty Details"
        btnStyle='blue-btn'
      />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
