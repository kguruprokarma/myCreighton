import i18n from '../i18n';
const json = require('../locales/en/common.json');
i18n.t = jest.fn((val) => {
    return json[val.split(':')[1]];
});
i18n.properties = json;
export default i18n;