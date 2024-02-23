"use client"

import React from 'react';
import { useGesture } from '@use-gesture/react';
import { ItemRifaOn } from './ItemRifaOn';
import { ListaRifasOn } from '@/data/ListaRifasOn';

export const SectionRifasOn = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], memo = scrollContainerRef.current?.scrollLeft }) => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = memo - mx;
        }
        return memo;
      },
    },
    {
      drag: {
        axis: 'x',
        filterTaps: true,
      },
    }
  );

const numeroRifas: number = ListaRifasOn.length;

  return (
    <div
      {...bind()}
      ref={scrollContainerRef}
      className="overflow-hidden w-full select-none"
      onDragStart={(e) => e.preventDefault()}
    >
        {numeroRifas === 1 &&
            <ItemRifaOn />   
         }
         {numeroRifas !== 1 &&
            <div className="flex flex-col xl:flex-row gap-3 w-max cursor-grab">
                <ItemRifaOn />
            </div>
         }
    </div>
  );
};
