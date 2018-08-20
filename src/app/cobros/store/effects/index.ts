import { RevisionEffects } from './revision.effects';
import { BonificacionesMCEffects } from './bonificacionesMC.effects';
import { CobrosEffects } from './cobros.effects';
import { CxCClienteEffects } from './cxc-cliente.effects';

export const effects: any[] = [
  RevisionEffects,
  BonificacionesMCEffects,
  CobrosEffects,
  CxCClienteEffects
];

export * from './revision.effects';
export * from './bonificacionesMC.effects';
export * from './cobros.effects';
export * from './cxc-cliente.effects';
