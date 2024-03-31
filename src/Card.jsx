import React from 'react';
import { LeftPartCard } from './LeftPart/LeftPartCard';
import { RightPartCard } from './RightPart/RightPartCard';

export function Card() {
  return (
    <div className="card">
      <LeftPartCard />
      <RightPartCard />
    </div>
  );
}
