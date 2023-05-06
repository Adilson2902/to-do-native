import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    top: 35,
    zIndex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    marginRight: 3,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderStyle: 'solid',
    padding: 16,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#808080',
  },
  button: {
    width: 52,
    height: 52,
    padding: 8,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
