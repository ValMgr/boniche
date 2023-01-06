import React from 'react';

interface IProps {
  id: string;
  color?: string | undefined;
  filled?: boolean;
  size?: number;
  onClick?: () => void;
}

function Icon({ id, color = '#000', filled = false, size = 1, onClick }: IProps) {
  return (
    <svg
      className='Icon'
      fill={filled ? color : 'transparent'}
      stroke={color ?? 'currentColor'}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size + 'em'}
      height={size + 'em'}
      onClick={onClick}>
      <use href={`/feather-sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;
