//We use Meteor ReactiveDict for keeping track of the UI State.
//it acts like a Redux Store. the main difference here is that we HAVE to mutate it,
//since otherwise we lose realtime reactivity. The Meteor tracker will notify our containers as soon
//as the reactive store is modified, triggering components update

export default {
  slideTo({Meteor, LocalState}, activeIndex) {
    //keep track of the highest slide index ever selected. this is only to ensure we are preloading images
    //and keeping them in cache (without using the default background again for those images, once loaded)
    let highestIndex = LocalState.get('JUMBOTRON_HIGHEST_ACTIVE_INDEX');
    return LocalState.set({
      'JUMBOTRON_CURRENT_INDEX': activeIndex,
      'JUMBOTRON_HIGHEST_ACTIVE_INDEX': activeIndex > highestIndex ? activeIndex : highestIndex
    });
  }
}