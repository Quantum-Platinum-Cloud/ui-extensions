import type {Browser} from './PixelEvents';
import type {EventBus} from './EventBus';
import type {RegisterInit} from './RegisterInit';

export interface ExtensionApi {
  readonly settings: Record<string, any>;
  readonly analytics: {
    readonly subscribe: EventBus['subscribe'];
  };
  readonly browser: Browser;
  readonly init: RegisterInit;
  readonly _pixelInfo: any;
}
