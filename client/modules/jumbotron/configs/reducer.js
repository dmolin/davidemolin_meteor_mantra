export default {
  slideTo: (state = {}, action = {}) => {
    switch(action.type) {
      case 'JUMBOTRON_CHANGE_SLIDE':
        return Object.assign({}, state, {
          currentIndex: action.data.slideIndex,
          highestIndex: action.data.slideIndex > state.highestIndex ? action.data.slideIndex : state.highestIndex
        });
      default:
        return state
    }
  }
}