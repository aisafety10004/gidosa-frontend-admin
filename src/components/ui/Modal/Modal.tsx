'use client';

import { cn } from '@/utils/styleClsx';
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import {
  ModalBodyProps,
  ModalCloseButtonProps,
  ModalContainerProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from './modal.types';

export const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const createModalRoot = document.createElement('div');
      createModalRoot.id = 'modal-root';
      document.body.appendChild(createModalRoot); // 모달이 열릴 때 추가
      setModalRoot(createModalRoot);

      return () => {
        document.body.removeChild(createModalRoot); // 모달이 닫힐 때 제거
      };
    }
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(children, modalRoot);
};

export const ModalContainer: FC<ModalContainerProps> = ({
  onClose,
  isHideCloseButton = false,
  children,
  className,
  opacity,
}) => (
  <div
    className={cn(
      'fixed inset-0pxr z-50 flex items-center justify-center',
      opacity ?? 'bg-opacity-50',
    )}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}
    onClick={onClose}
  >
    <div
      className={cn(
        'rounded-6pxr relative w-[600px] bg-white p-24pxr',
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {!isHideCloseButton && <ModalCloseButton onClose={onClose} />}
      {children}
    </div>
  </div>
);

export const ModalHeader: FC<ModalHeaderProps> = ({ children, className }) => (
  <div className={cn('text-xl font-bold', className)}>{children}</div>
);

export const ModalBody: FC<ModalBodyProps> = ({ children, className }) => (
  <div className={cn('mt-4', className)}>{children}</div>
);

export const ModalFooter: FC<ModalFooterProps> = ({ children, className }) => (
  <div className={cn('mt-6', className)}>{children}</div>
);

export const ModalCloseButton: FC<ModalCloseButtonProps> = ({
  onClose,
  className,
}) => (
  <Button
    className={cn('absolute right-20pxr top-20pxr z-10 text-xl', className)}
    // variant={'transparent'}
    onClick={onClose}
  >
    {/* <Svgs.Icons.CrossMiddleBasic className="fill-dark-40 hover:fill-dark-30" /> */}
  </Button>
);
