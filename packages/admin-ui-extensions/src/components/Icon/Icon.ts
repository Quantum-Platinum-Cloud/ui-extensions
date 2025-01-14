import {createRemoteComponent} from '@remote-ui/core';

type Source =
  | 'cancelSmallMinor'
  | 'searchMinor'
  | 'starHollow'
  | 'starFilled'
  | 'sortMinor';

export interface IconProps {
  /** Pre-defined glyph content to display. */
  source: Source;

  /** Text describing the icon, to be read to screenreaders. */
  accessibilityLabel?: string;
}

/**
 * Icons are small visual indicators from a set of pre-defined glyphs.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
