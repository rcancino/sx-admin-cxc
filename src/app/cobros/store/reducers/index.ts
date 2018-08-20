import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromCobros from './cobro.reducer';
import * as fromRevision from './revision.reducer';
import * as fromBonificaciones from './bonificacionesMC.reducer';
import * as fromCuentasPorCliente from './cxc-cliente.reducers';

export interface CobranzaState {
  cobros: fromCobros.State;
  revision: fromRevision.RevisionState;
  bonificacionesMC: fromBonificaciones.BonificacionesMCState;
  cuentasPorCliente: fromCuentasPorCliente.State;
}

export const reducers: ActionReducerMap<CobranzaState> = {
  cobros: fromCobros.reducer,
  revision: fromRevision.reducer,
  bonificacionesMC: fromBonificaciones.reducer,
  cuentasPorCliente: fromCuentasPorCliente.reducer
};

// Cobranza slice
export const getCobranzaState = createFeatureSelector('cobranza');
