import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  buttonContainer: {
    paddingVertical: 15,
  },
  buttonText: {
    alignSelf: 'flex-end',
  },
};
const ButtonText = ({
  disabled, caption, onPress, textStyle, containerStyle,
  bold, underline, italic, color, disabledColor,
}) => {
  const textDecorationStyle = {
    textDecorationLine: underline && !disabled ? 'underline' : 'none',
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    color: disabled ? disabledColor : color,
  };
  if (disabled) {
    return (
      <View style={[styles.buttonContainer, containerStyle]}>
        <Text style={[styles.buttonText, textDecorationStyle, textStyle]}>
          {caption}
        </Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, containerStyle]}
    >
      <Text style={[styles.buttonText, textDecorationStyle, textStyle]}>
        {caption}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const StyleShape = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

ButtonText.propTypes = {
  caption: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  containerStyle: StyleShape,
  textStyle: StyleShape,
};

ButtonText.defaultProps = {
  disabled: false,
  italic: false,
  underline: false,
  bold: false,
  color: '#2f2f2f',
  disabledColor: '#8C8C8C',
  textStyle: {},
  containerStyle: {},
};
