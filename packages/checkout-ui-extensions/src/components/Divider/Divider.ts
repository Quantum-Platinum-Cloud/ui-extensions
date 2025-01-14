import {createRemoteComponent} from '@remote-ui/core';

import type {Size, Alignment, Direction} from '../shared';

export interface DividerProps {
  /**
   * Use to create dividers with varying widths.
   *
   * @defaultValue 'small'
   */
  size?: Extract<Size, 'small' | 'base' | 'large' | 'extraLarge'>;

  /**
   * Use to specify direction of divider.
   *
   * @defaultValue 'inline'
   */
  direction?: Direction;

  /**
   * Use to specify alignment of contents of divider.
   *
   * @defaultValue 'center'
   */
  alignment?: Alignment;
}

/**
 * A divider separates content and represents a thematic break between elements.
 */
export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
