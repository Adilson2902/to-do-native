import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    borderStyle: 'solid',
    marginTop: 15,
    marginHorizontal: 16,
    paddingTop: 40,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 15,
  },
  textNormal: {
    fontWeight: '300',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#808080',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#808080',
  },
});
