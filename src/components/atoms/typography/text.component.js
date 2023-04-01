import styled from 'styled-components/native';

const defaultTextStyles = theme => `
 
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.primary[600]}
 
`;

const hint = theme => `
font-family: ${theme.fonts.primary[400]};
    font-size: 10px;
`;

const error = theme => `
    color: ${theme.colors.text.error};
`;

const caption = theme => `
font-family: ${theme.fonts.primary[400]};
    font-size: ${theme.fontSizes.caption};
    margin-top : 8px

`;

const label = theme => `
font-family: ${theme.fonts.primary[600]};
    font-size: ${theme.fontSizes.body};

`;

const header = theme => `
font-family: ${theme.fonts.primary[700]};
    font-size: ${theme.fontSizes.body};

`;
const smallLabel = theme => `
font-family: ${theme.fonts.primary[500]};
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.inverse};

`;

const headerProfile = theme => `
font-family: ${theme.fonts.primary[600]};
    font-size: 20px;

`;

const variants = {
  body,
  label,
  caption,
  error,
  smallLabel,
  hint,
  headerProfile,
  header,
};

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
