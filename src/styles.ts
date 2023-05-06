import {ViewStyle, TextStyle} from 'react-native/types';
import {StyleSheet} from 'react-native';

interface StylesClasses {
  body: ViewStyle;
  container: ViewStyle;
  rowContainer: ViewStyle;
  textCreate: TextStyle;
  textConcluded: TextStyle;
  textNumber: TextStyle;
  rowView: ViewStyle;
}

export const styles = StyleSheet.create<StylesClasses>({
  body: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {height: '80%', backgroundColor: '#1A1A1A', zIndex: -1},
  rowContainer: {
    marginTop: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textCreate: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  textConcluded: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#8284FA',
  },
  textNumber: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    borderRadius: 999,
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 5,
  },
  rowView: {display: 'flex', flexDirection: 'row'},
});
