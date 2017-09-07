import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const labelSizes = {
  small: {
    'font-size': '10px',
    'line-height': '12px',
  },
  medium: {
    'font-size': '14px',
    'line-height': '16px',
  },
  large: {
    'font-size': '22px',
    'line-height': '24px',
  },
};

const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 8px;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 100ms ease;
`;

Label.PropTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  textTransform: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'uppercase',
};

export default Label;
