import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";

const ProductBasicDetailsForm = ({ handleNextFormRendering }) => {
  return (
    <form className="max-w-sm mx-auto">
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>

      <InputField type="text" name="product_name" labelName="Product Name" />
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

      {/*<div className="mb-5">*/}
      {/*  <label*/}
      {/*    htmlFor="product_price"*/}
      {/*    className="block mb-2 text-sm font-medium text-gray-900 "*/}
      {/*  >*/}
      {/*    Product Price*/}
      {/*  </label>*/}
      {/*  <input*/}
      {/*    type="number"*/}
      {/*    id="product_price"*/}
      {/*    name="product_price"*/}
      {/*    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "*/}
      {/*    required*/}
      {/*  />*/}
      {/*</div>*/}

      <FormHandlingButton
        executingMethod={handleNextFormRendering}
        buttonName="Fill Warranty Details"
        btnStyle="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
