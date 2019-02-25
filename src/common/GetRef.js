/**
 *
 * @author fengjun
 * @build 2018/10/31
 *
 */

import {NavigationActions, StackActions} from 'react-navigation';

let _ref, _navigator;

function setTopLevelRef(ref) {
  _ref = ref;
}

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function show(msg) {
  _ref.show(msg)
}

function hide() {
  _ref.hide()
}

// function change_progress(arg) {  //message, progress, pronum, pronum_name, btnname
//   // console.log("arg")
//   // console.log(arg)
//   _ref.change_progress(arg)
// }


function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}


export default {
  show,
  hide,
  setTopLevelRef,
  navigate
};