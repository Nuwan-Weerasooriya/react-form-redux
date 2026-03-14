import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { storeProductBasicDetails } from "../../../../utilities/slice/productBasicDetailsSlice.js";
import { useEffect, useState } from "react";

const ProductBasicDetailsForm = ({
  productBasicDetails,
  setProductBasicDetails,
  handleNextFormRendering,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState({});
  const dispatch = useDispatch();
  const alreadyAddedProductDetails = useSelector(
    (state) => state.productDetails.productBasicDetails,
  );

  useEffect(() => {
    setExistingProductDetails(alreadyAddedProductDetails);
  }, [alreadyAddedProductDetails]);

  const handleInputField = (event) => {
    const { name, value } = event.target;

    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(storeProductBasicDetails(productBasicDetails));
    handleNextFormRendering();
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
        value={existingProductDetails.product_name}
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        value={existingProductDetails.product_price}
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
        value={existingProductDetails.product_price}
        handleInputField={handleInputField}
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
        buttonName="Fill Warranty Details"
        btnStyle="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      />
    </form>
  );
};

/* TYPE DEFINITION */
ProductBasicDetailsForm.propTypes = {
  productBasicDetails: PropTypes.object.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
