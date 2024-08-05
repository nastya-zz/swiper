import {Main} from "../screens/main/Main";
import {useMediaStore} from "../store";
import "../i18n.config";

export default function MainScreen() {
  useMediaStore.getState().initMedia()
  return (<Main/>);
}
