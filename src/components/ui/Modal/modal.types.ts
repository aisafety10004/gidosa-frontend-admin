import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export interface ModalContainerProps {
  onClose?: () => void;
  isHideCloseButton?: boolean;
  children: ReactNode;
  className?: string;
  opacity?: string;
}

export interface ModalHeaderProps
  extends Pick<ModalContainerProps, 'children' | 'className'> {}

export interface ModalBodyProps
  extends Pick<ModalContainerProps, 'children' | 'className'> {}

export interface ModalFooterProps
  extends Pick<ModalContainerProps, 'children' | 'className'> {}

export interface ModalCloseButtonProps
  extends Pick<ModalContainerProps, 'onClose' | 'className'> {}
