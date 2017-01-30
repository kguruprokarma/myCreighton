import classesApi from '../middleware/classes/api'
import * as types from './actions'

export const REQUEST_CLASSES_DATA = 'REQUEST_CLASSES_DATA'
export const RECEIVE_CLASSES_DATA = 'RECEIVE_CLASSES_DATA'
export const RECEIVE_CLASSES_DATA_ERROR = 'RECEIVE_CLASSES_DATA_ERROR'
export const ON_CATAGORY_CHANGE = 'ON_CATAGORY_CHANGE'


let requestData = () => ({
  type: types.REQUEST_CLASSES_DATA
})

let receiveClassesData = (classesData) => (
{	
  type: types.RECEIVE_CLASSES_DATA,
  data: classesData
})

let receiveError = (json) => (
{
  type: types.RECEIVE_CLASSES_DATA_ERROR,
  data: json
})

let catagoryChange = (str) => (
{
  type: types.ON_CATAGORY_CHANGE,
  data: str
})

export function onCatagoryChange(str) {
    console.log("str: ",str)
    return function ( dispatch ) {
        dispatch( catagoryChange(str) )
    }
}

export function getClassesDataByWeek() {
  return function ( dispatch ) {
    dispatch( requestData() )
    return classesApi.getClassesDataByWeek()
      .then( (response) => {		
        dispatch( receiveClassesData( response ) )
      }
    )
      .catch( (error) => {
        dispatch( receiveError( {
          error: error
        } ) )
      }
    )
  }
}


export function getClassesDataByToday() {
    return function ( dispatch ) {
        dispatch( requestData() )
        return classesApi.getClassesDataByToday()
            .then( (response) => {
                    dispatch( receiveClassesData( response ) )
                }
            )
            .catch( (error) => {
                    dispatch( receiveError( {
                        error: error
                    } ) )
                }
            )
    }
}


export function getClassesDataForAtoZ() {
    return function ( dispatch ) {
        dispatch( requestData() )
        return classesApi.getClassesAtoZData()
            .then( (response) => {
                    dispatch( receiveClassesData( response ) )
                }
            )
            .catch( (error) => {
                    dispatch( receiveError( {
                        error: error
                    } ) )
                }
            )
    }
}
