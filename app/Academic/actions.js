import academicApi from '../middleware/academic/api'
import * as types from './actions'

export const REQUEST_ACADEMIC_DATA = 'request.academic.data'
export const RECEIVE_ACADEMIC_DATA = 'receive.academic.data'
export const SHOW_ACADEMIC_DATA = 'show.academic.data'
export const RECEIVE_ACADEMIC_DATA_ERROR = 'receive.academic.data.error'



let requestData = () => ({
  type: types.REQUEST_ACADEMIC_DATA
})

let receiveAcademicData = (academicData) => (
{	

  type: types.RECEIVE_ACADEMIC_DATA,
  data: academicData
})


let receiveError = (json) => (
{
  type: types.RECEIVE_ACADEMIC_DATA_ERROR,
  data: json
})

export function getAcademicData() {
  return function ( dispatch ) {
    dispatch( requestData() )
    return academicApi.getAcademicData()
      .then( (response) => {		
        dispatch( receiveAcademicData( response ) )
      }
    )
      .catch( (error) => {
        dispatch( receiveError( {
          error: error
        } ) )
        dispatch( showAcademicData() )
      }
    )
  }
}