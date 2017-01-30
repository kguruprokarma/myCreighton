/*Created Date: - 20th -01 -2017
*Usage of file: - This action is used to get selected class details of a user.*
*/

import classesApi from '../../middleware/classes/api'
import * as types from './actionTypes'

let requestClassDetailsData = () => ({
  type: types.REQUEST_CLASS_DETAILS_DATA
})

let receiveClassDetailsData = (classDetails) => (
{	
  type: types.RECEIVE_CLASS_DETAILS_DATA,
  data: classDetails
})

let receiveError = (error) => (
{
  type: types.RECEIVE_CLASS_DETAILS_ERROR,
  data: error
})

export function getClassDetails(id) {
  return function ( dispatch ) {
    dispatch( requestClassDetailsData() )
    return classesApi.getClassDetails(id)
      .then( (response) => {		
        dispatch( receiveClassDetailsData( response ) )
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


