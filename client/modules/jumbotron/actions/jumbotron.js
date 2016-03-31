export default {
  //slideTo({Meteor, LocalState}, project, activeIndex) {
  slideTo({Meteor, LocalState}, activeIndex) {
    //keep track of the highest slide index ever selected. this is only to ensure we are preloading images
    //and keeping them in cache (without using the default background again for those images, once loaded)
    let highestIndex = LocalState.get('JUMBOTRON_HIGHEST_ACTIVE_INDEX');
    //return the new state
    return LocalState.set({
      //'JUMBOTRON_CURRENT_ITEM':project,
      'JUMBOTRON_CURRENT_INDEX': activeIndex,
      'JUMBOTRON_HIGHEST_ACTIVE_INDEX': activeIndex > highestIndex ? activeIndex : highestIndex
    });
  }
}