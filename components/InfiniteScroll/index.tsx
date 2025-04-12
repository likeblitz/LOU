import React from 'react';
import ScrollTrack from './ScrollTrack';
import { SCROLL_IMAGES } from './constants';
import { colors } from '../../utils/colors';

export default function InfiniteScroll() {
  return (
    <div className="w-full bg-[#CFD989] overflow-hidden border-y-2 border-[#3E2F23]">
      <div className="py-8 relative">
        <ScrollTrack images={SCROLL_IMAGES} />
      </div>
    </div>
  );
}