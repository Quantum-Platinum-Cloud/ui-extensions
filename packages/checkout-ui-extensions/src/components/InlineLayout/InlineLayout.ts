import {createRemoteComponent} from '@remote-ui/core';

import {GridProps, GridSize} from '../Grid';

export interface InlineLayoutProps extends Omit<GridProps, 'columns' | 'rows'> {
  /**
   * Sizes for each column of the layout.
   *
   *
   * `auto`: intrinsic size of the element
   *
   * `fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.
   *
   * `Unit`: size in pixels `px`, percentages `%` or fractions `fr`.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When the size of an element is not explicitly set, it will fill the remaining space available.
   *
   * - When only one size is set, all elements of the layout will take that size.
   *
   *
   * @defaultValue 'fill'
   */
  columns?: GridSize | GridSize[];
}

/**
 * InlineLayout is used to lay out content over multiple columns.
 *
 * By default, all columns are of equal size and fill the available inline space.
 * Content does not wrap on new rows when not enough columns have been explicitly sized,
 * instead they are added as new column and fill the remaining inline space.
 */
export const InlineLayout = createRemoteComponent<
  'InlineLayout',
  InlineLayoutProps
>('InlineLayout');