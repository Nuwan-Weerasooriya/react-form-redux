import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import { storeProductBasicDetails } from "../../../../utilities/slice/productBasicDetailsSlice.js";
import {useDispatch} from "react-redux";

const ProductBasicDetailsForm = ({
  productBasicDetails,
  setProductBasicDetails,
  handleNextFormRendering,
}) => {
    const dispatch = useDispatch()

  const handleInputField = (event) => {
    const { name, value } = event.target;

    setProductBasicDetails((prevState) => ({            // spread karana nisa normal bracket () yodai
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(storeProductBasicDetails(productBasicDetails))        //action method eka widiyata act karana nisa () yodai

      handleNextFormRendering()

  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField
        type="text"
        name="product_name"
        labelName="Product Name"
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
        handleInputField={handleInputField}
      />

      <FormHandlingButton
        executingMethod={handleNextFormRendering}
        buttonName="Fill Warranty Details"
        btnStyle="blue-btn"
      />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  productBasicDetails: PropTypes.object.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
