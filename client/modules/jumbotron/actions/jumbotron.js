export default {
  slideTo({Meteor, LocalState}, project) {
    
    console.log("slideTo", project);
    //return the new state
    return LocalState.set('JUMBOTRON_COLOR', project.bgColor);
  }
}