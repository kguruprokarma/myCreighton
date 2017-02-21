import React from 'react';
import { shallow } from 'enzyme';
import OutlookCalendar from '../components/outlookCalendar';

describe('Next Event OutlookCalendar component testing ----->', () => {

    const defaultProps = {
        "title": "Test: Chapters 4-5",
        "date": "February 27, 2017",
        "startDate": "Jan 26",
        "endDate": "Jan 27",
        "startTime": "10:00 a.m.",
        "endTime": "12:00 noon",
        "location": "US"
    };

    const OutlookCalendarC = shallow(<OutlookCalendar data={defaultProps} />);

    it('OutlookCalendar component is defined', () => {
        expect(OutlookCalendarC).toBeDefined();
    });

    it('OutlookCalendar component by property check', () => {
        expect(OutlookCalendarC.unrendered.props.data.startDate).toBe(defaultProps.startDate);
    });

    it('OutlookCalendar recived props', () => {
        expect(JSON.stringify(OutlookCalendarC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
    });

});