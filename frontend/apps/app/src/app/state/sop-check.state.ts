import { State, Action, StateContext } from '@ngxs/store';
import { SetSopCheck, UncheckAll } from './sop-check.actions';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';

export interface SopCheckStateModel {
  [key: string]: { [key: string]: boolean };
}

@State<SopCheckStateModel>({
  name: 'sopCheck',
  defaults: {}
})
export class SopCheckState {
  @Action(SetSopCheck)
  @ImmutableContext()
  public SetSopCheck(
    { setState }: StateContext<SopCheckStateModel>,
    { sopId, sopItemId, check }: SetSopCheck
  ) {
    setState((state: SopCheckStateModel) => {
      if (!state[sopId]) {
        state[sopId] = { [sopItemId]: check };
      } else {
        state[sopId][sopItemId] = check;
      }
      return state;
    });
  }

  @Action(UncheckAll)
  @ImmutableContext()
  public UncheckAll(
    { setState }: StateContext<SopCheckStateModel>,
    { sopId }: SetSopCheck
  ) {
    setState((state: SopCheckStateModel) => {
      state[sopId] = {};
      return state;
    });
  }
}
