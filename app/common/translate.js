import React, { Component } from 'react';
import { translate } from 'react-i18next';
import i18n from '../i18n';

export const translateText = (key) => {
    return i18n.t(key);
}
