import { State, Action, StateContext } from '@ngxs/store';
import { SopCheckAction } from './sop-check.actions';

export class SopCheckStateModel {
  public items: string[];
}

@State<SopCheckStateModel>({
  name: 'sopCheck',
  defaults: {
    items: []
  }
})
export class SopCheckState {
  @Action(SopCheckAction)
  add(ctx: StateContext<SopCheckStateModel>, action: SopCheckAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
