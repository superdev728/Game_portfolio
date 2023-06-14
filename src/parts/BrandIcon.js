/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl">
        Game Developer
        <span className="text-theme-purple" style={{ fontSize: '1.5rem' }}> Naoki Oda</span>
      </p>
    </Button>
  );
}
