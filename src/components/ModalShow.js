/**
 *
 * @author fengjun
 * @build 2019-02-25
 * @name ModalShow
 *
 */


import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ModalStyle from "../common/ModalStyle";

export default class ModalShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: "温馨提示",
      message: "",
      btnname: "确 认",
    };
  }

  show = (message) => {
    this.setState({
      visible: true,
      message: message
    })
  };

  hide = () => {
    this.setState({
      visible: false
    })
  };

  render() {
    let {visible, title, message} = this.state;
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType={'fade'}//none slide fade
        onRequestClose={() => {
          this.setState({
            visible: false,
          })
        }}
      >
        <View style={ModalStyle.modalContainer}>
          <View style={ModalStyle.container}>
            <View style={ModalStyle.modalTitleWrap}>
              <Text style={ModalStyle.modalTitle}>{title}</Text>
            </View>
            <View style={ModalStyle.content_wrap}>
              <Text style={ModalStyle.modalMessage}>{message}</Text>
            </View>
            <View style={ModalStyle.row}>
              <TouchableOpacity style={[ModalStyle.leftBn, {borderColor: "#ccc"}]} onPress={() => {
                this.setState({
                  visible: false,
                })
              }}>
                <Text style={[ModalStyle.leftBnText, {color: "#999"}]}>取 消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ModalStyle.leftBn]} onPress={() => {
                this.setState({
                  visible: false,
                })
              }}>
                <Text style={ModalStyle.leftBnText}>确 定</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

