const {describe, it} = global;
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import jumbotron from '../jumbotron';
import sinon from 'sinon';

describe('jumbotron.actions.jumbotron', () => {
  it('should define a slideTo() action', () => {
    expect(jumbotron.slideTo).to.exist
  })

  it('updates the LocalState according to the slide index received', () => {
    const LocalState = {
      set: sinon.spy(),
      get: sinon.stub()
    };
    LocalState.get.returns(1);

    jumbotron.slideTo({LocalState}, 2);
    expect(LocalState.set.called).to.be.true;
    expect(LocalState.set.getCall(0).args[0]).to.deep.equal({
      'JUMBOTRON_CURRENT_INDEX': 2,
      'JUMBOTRON_HIGHEST_ACTIVE_INDEX': 2
    })
  })

  it("doesn't update the highest index if the current one if higher in value", () => {
    const LocalState = {
      set: sinon.spy(),
      get: sinon.stub()
    };
    LocalState.get.returns(3);

    jumbotron.slideTo({LocalState}, 2);
    expect(LocalState.set.called).to.be.true;
    expect(LocalState.set.getCall(0).args[0]).to.deep.equal({
      'JUMBOTRON_CURRENT_INDEX': 2,
      'JUMBOTRON_HIGHEST_ACTIVE_INDEX': 3
    })
  })
})