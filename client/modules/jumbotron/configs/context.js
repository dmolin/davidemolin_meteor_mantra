/**
 * The context file for each module provide an initial state for the area of the ReactiveDict managed by the module
 * @param state ReactiveDict
 */
export default (state) => {
  state.set({
    'JUMBOTRON_CURRENT_INDEX': 0,
    'JUMBOTRON_HIGHEST_ACTIVE_INDEX': 0
  });
}