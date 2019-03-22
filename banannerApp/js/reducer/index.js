import { GO_LOGIN, OUT_LOGIN } from '../actions';
import { isLogin } from '../states';

function indexReducer (state = isLogin, action) {
  switch (action.type) {
    case GO_LOGIN:
      // 登录
      return true;
    case OUT_LOGIN:
      // 登录
      return false;
    default:
      return state;
  }
}

export default indexReducer;