import types from './types'

export const changeCurentUser = () => {
  return {
    types: types.CHANGE_CURRENT_USER,
  }
}