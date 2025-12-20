'use client';

import Image from 'next/image';
import React from 'react';

interface MarkdownImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPriority: boolean;
}

const MarkdownImage: React.FC<MarkdownImageProps> = ({ src, alt, width, height, isPriority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={isPriority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default MarkdownImage;