import React, {useState} from 'react';
import {string, bool, func} from 'prop-types';

import {
  InputWrapper,
  Input as StyledInput,
  PassIconWrapper,
  SearchIconWrapper,
  InputMessage,
  InputResponseMessage,
} from './styles';

const Input = React.forwardRef(function InputWithRef(props, ref) {
  const {
    type,
    message,
    responseMessage,
    positionWrapper,
    marginBottom,
    handleSearchClick,
    fullwidth,
  } = props;
  const isSearch = type === 'search';
  const isPass = type === 'password';
  const [viewPass, setViewPass] = useState(!isPass);
  const togglePass = () => setViewPass(!viewPass);

  return (
    <InputWrapper
      positionWrapper={positionWrapper}
      marginBottom={marginBottom}
      fullwidth={fullwidth}>
      {responseMessage && <InputResponseMessage>{responseMessage}</InputResponseMessage>}
      <StyledInput
        fullwidth={fullwidth}
        ref={ref}
        {...props}
        isPass={isPass}
        isSearch={isSearch}
        type={isPass ? (viewPass ? 'text' : 'password') : type}
      />
      {/* {isPass && (
        <>
          <PassIconWrapper onClick={togglePass} visible={viewPass}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </PassIconWrapper>
          <PassIconWrapper onClick={togglePass} visible={!viewPass}>
            <FontAwesomeIcon icon={faEye} />
          </PassIconWrapper>
        </>
      )}
      {isSearch && (
        <SearchIconWrapper onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconWrapper>
      )} */}
      {message && <InputMessage>{message}</InputMessage>}
    </InputWrapper>
  );
});

Input.propTypes = {
  type: string.isRequired,
  positionWrapper: string,
  defaultValue: string,
  message: string,
  responseMessage: string,
  marginBottom: string,
  placeholder: string,
  isPass: string,
  fullwidth: bool,
  error: bool,
  handleSearchClick: func,
};

export default Input;
