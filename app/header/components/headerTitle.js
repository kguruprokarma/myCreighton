import * as HEADER from '../../constants/headerTitleConstants';
import { translateText } from '../../common/translate';

export default function (argument) {
  let title = "";
  const rootURL = argument.path.split("/");
  if (rootURL[1] === "" || rootURL[1] === HEADER.DASHBOARD) {
   return title = translateText('common:MY_CREIGHTON');
  }
  if (rootURL[1] === HEADER.CLASSES) {
    return title = translateText('common:CLASS_SCHEDULE');
  }
  if (rootURL[1] === HEADER.CLASS_DETAILS) {
    return title = translateText('common:CLASS_DETAIL');
  }
  if (rootURL[1] === HEADER.PROFILE) {
    return title = translateText('common:PROFILE_MY_PROFILE');
  }
  if (rootURL[1] === HEADER.ACADEMIC) {
    return title = translateText('common:PROFILE_ACADEMIC');
  }
}

