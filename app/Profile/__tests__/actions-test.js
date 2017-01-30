import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../../app/Profile/actionType'
import * as actionCreator from '../../../app/Profile/actions'
import api from '../../../app/middleware/profile/api'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const res =  {
            "studentProfile": {
                    "bioData": {
                        "legalName": {
                            "first": "John",
                            "middle": "J",
                            "last": "Edward"
                        },
                        "address": {
                            "home": {
                                "street1": "12345 Nicolas St",
                                "street2": "",
                                "city": "Omaha",
                                "state": "Nebraska",
                                "postalCode": "68154-1234"
                            },
                            "school": {
                                "street1": "2112 California St",
                                "street2": "",
                                "city": "Omaha",
                                "state": "Nebraska",
                                "postalCode": "68179"
                            }
                        },
                        "contactDetail": {
                            "primaryPhone": "402.334.0477",
                            "emergencyContact": {
                                "name": {
                                    "first": "Mary",
                                    "middle": "J",
                                    "last": "Edward"
                                },
                                "phone": "402.333.5671",
                                "relation": "Mother"
                            },
                            "email": {
                                "school": {
                                    "value": "12345678g@creighton.edu"
                                }, 
                                "personal": {
                                    "value": "bluejfan2019@yahoo.com"
                                }
                            },
                            "birthDate": "May 5, 1997",
                            "netID": "bbb12345",
                            "relationDetail": {
                            "parent": {
                                "firstName": "Terrance",
                                "middleName": "",
                                "lastName": "Edward"
                            },
                            "guardian": {
                                "firstName": "Adam",
                                "middleName": "J",
                                "lastName": "Edwards"
                            }
                        }
                        }
                    }
                }
            }

        const errorRes = {
            error:"Error"
        }

describe('<Action Test />', () =>{

     it('should handle getProfileData', () => {   
             api.getProfileData = sinon.stub().returns(Promise.resolve(res.studentProfile));         

             let dispatch = sinon.spy();
             let action = actionCreator.getStudentProfileData();            
             action(dispatch).then(() => {                 
                 expect(dispatch.called).to.be.true;
             });

             api.getProfileData = sinon.stub().returns(Promise.reject(errorRes));
             dispatch = sinon.spy();
             action = actionCreator.getStudentProfileData();
             action(dispatch).then(() => {
             expect(dispatch.called).to.be.true;
             });
     });
})
