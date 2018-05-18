import { Action } from '@ngrx/store';

import { VentaCredito } from '../../models/ventaCredito';

export const LOAD_REVISION_ACTION = '[RevisionCXC] Load revision action';
export const LOAD_REVISION_ACTION_FAIL =
  '[RevisionCXC] Load revision action Fail';
export const LOAD_REVISION_ACTION_SUCCESS =
  '[RevisionCXC] Load revision action Success';

export class LoadRevisionAction implements Action {
  readonly type = LOAD_REVISION_ACTION;
}

export class LoadRevisionActionFail implements Action {
  readonly type = LOAD_REVISION_ACTION_FAIL;
  constructor(public payload: any) {}
}
export class LoadRevisionActionSuccess implements Action {
  readonly type = LOAD_REVISION_ACTION_SUCCESS;
  constructor(public payload: VentaCredito[]) {}
}

// Update revisiones
export const UPDATE_REVISION_ACTION = '[RevisionCXC] Update revision action';
export const UPDATE_REVISION_ACTION_FAIL =
  '[RevisionCXC] Update revision action Fail';
export const UPDATE_REVISION_ACTION_SUCCESS =
  '[RevisionCXC] Update revision action Success';

export class UpdateRevisionAction implements Action {
  readonly type = UPDATE_REVISION_ACTION;
  constructor(public payload: VentaCredito) {}
}

export class UpdateRevisionActionFail implements Action {
  readonly type = UPDATE_REVISION_ACTION_FAIL;
  constructor(public payload: any) {}
}

export class UpdateRevisionActionSuccess implements Action {
  readonly type = UPDATE_REVISION_ACTION_SUCCESS;
  constructor(public payload: VentaCredito) {}
}

export type RevisionActions =
  | LoadRevisionAction
  | LoadRevisionActionFail
  | LoadRevisionActionSuccess
  | UpdateRevisionAction
  | UpdateRevisionActionFail
  | UpdateRevisionActionSuccess;
