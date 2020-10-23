import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '16px')};
  width: ${({fullwidth}) => fullwidth && '100%'};
`;

export const Input = styled.input`
  background: ${({theme, bgColor}) => (bgColor ? bgColor : theme.neutral4)};
  height: 38px;
  width: ${({fullwidth}) => (fullwidth ? '100%' : '288px')};
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '2px')};
  padding: 10px;
  padding-right: ${({isPass}) => isPass && '35px'};
  padding-right: ${({isSearch}) => isSearch && '35px'};
  border: 1px solid ${({theme, error}) => (error ? theme.errors : theme.neutral3)};
  transition-property: background, border;
  transition-duration: 300ms;
  transition-timing-function: ease;

  &::placeholder {
    color: ${({theme}) => theme.neutral2};
  }
  &:focus {
    background: inherit;
    outline-color: ${({theme, error}) => (error ? theme.errors : theme.neutral1)};
  }

  &:-internal-autofill-selected {
    background: unset !important;
  }
`;

export const PassIconWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  padding: 0.7rem;
  right: 0;
  opacity: ${({visible}) => (visible ? 1 : 0)};
  transition: opacity 300ms ease;
`;
export const SearchIconWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  padding: 0.5rem;
  right: 3px;
  bottom: 1px;
  transition: opacity 300ms ease;

  &::before {
    content: ' ';
    position: absolute;
    right: 32px;
    top: 2px;
    height: 27px;
    width: 1px;
    background: ${({theme}) => theme.neutral2};
  }
`;

export const InputMessage = styled.p`
  color: ${({theme}) => theme.main1};
  font-size: 10px;
  position: absolute;
  right: 0;
  margin-bottom: 0;
`;
export const InputResponseMessage = styled.p`
  color: ${({theme}) => theme.main1};
  font-size: 10px;
  position: absolute;
  right: 0;
  margin-bottom: 0;
  width: 350px;
  text-align: right;
  bottom: 40px;
`;
