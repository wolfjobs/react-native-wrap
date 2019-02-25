/**
 *
 * @author fengjun
 * @build 2019-01-28
 * @name ModalStyle
 *
 */

import {Dimensions, StyleSheet} from "react-native";

let {height, width} = Dimensions.get('window')


const ModalStyle = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.3)", flex: 1, justifyContent: "center", alignItems: "center"
  },
  container:{
    width: width * 0.8,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden"
  },
  modalTitleWrap:{
    flexDirection: 'row',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#00A9F2",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between"
  },
  modalTitle: {
    color: '#333',
    fontSize: 16,
    marginTop: 10,
  },
  content_wrap:{
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessage: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  leftBn: {
    height: 32,
    width: 80,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#00A9F2",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  leftBnText: {
    fontSize: 16,
    color: '#00A9F2',
  },
});

export default ModalStyle;