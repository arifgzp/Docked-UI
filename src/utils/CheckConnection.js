import NetInfo from "@react-native-community/netinfo";
import { makeAutoObservable } from "mobx";
// let _currentNetwork;

// NetInfo.fetch().then((state) => {
// 	_currentNetwork = state.isConnected;
// 	console.log('NetInfo.fetch()');
// });

// export const CheckConnection = () => {
// 	const [netInfo, setNetInfo] = useState(_currentNetwork);

// 	useEffect(() => {
// 		const unsubscribe = NetInfo.addEventListener((state) => {
// 			// console.log('Connection type', state.type);
// 			// console.log('Is connected?', state.isConnected);
// 			setNetInfo(state.isConnected);
// 		});
// 		return () => unsubscribe();
// 	}, []);

// 	return netInfo;
// };

// export const refreshConnection = () => {
// 	console.log('refresh');
// 	NetInfo.refresh().then((state) => {
// 		console.log('Connection type', state.type);
// 		console.log('Is connected?', state.isConnected);
// 	});
// };

class CheckConnection {
  _currentNetworkStatus = false;
  _postConnectionHandler = null;

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init = async () => {
    try {
      const initialDeviceConnection = await NetInfo.fetch();
      this.isDeviceConnected =
        initialDeviceConnection.isConnected &&
        initialDeviceConnection.isInternetReachable;
    } catch (error) {
      console.error("CheckConnection >> init >> Error", error);
    } finally {
      NetInfo.addEventListener((deviceConnection) => {
        this.isDeviceConnected =
          deviceConnection.isConnected && deviceConnection.isInternetReachable;
        if (this.isDeviceConnected && this.PostConnectionHandler) {
          this.PostConnectionHandler();
          this.PostConnectionHandler = null;
        }
      });
    }
  };

  get isDeviceConnected() {
    return this._currentNetworkStatus;
  }

  set isDeviceConnected(value) {
    this._currentNetworkStatus = value;
  }

  get PostConnectionHandler() {
    return this._postConnectionHandler;
  }

  set PostConnectionHandler(handler) {
    this._postConnectionHandler = handler;
  }

  refreshConnection = async () => {
    console.log("CheckConnection >> refreshConnection");
    try {
      const deviceConnection = await NetInfo.refresh();
      console.log(
        "CheckConnection >> refreshConnection >> Connection type : ",
        deviceConnection.type
      );
      console.log(
        "CheckConnection >> refreshConnection >> Is connected : ",
        deviceConnection.isConnected
      );
      console.log(
        "CheckConnection >> refreshConnection >> Is reachable : ",
        deviceConnection.isInternetReachable
      );
      if (
        deviceConnection.isConnected &&
        deviceConnection.isInternetReachable
      ) {
        this.isDeviceConnected = true;
        if (this.PostConnectionHandler) {
          this.PostConnectionHandler();
          this.PostConnectionHandler = null;
        }
      }
    } catch (error) {
      console.error("CheckConnection >> refreshConnection >> Error", error);
    }
  };
}

export default new CheckConnection();
