import approvalDetailMock from '@/models/mock/approvalDetailMock.json';
import { Viewer } from '@toast-ui/react-editor';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../icons';
import { Button } from '../ui/Button/Button';
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalHeader,
} from '../ui/Modal/Modal';

interface Props {
  isSystem?: boolean;
}

export function ApprovalDetail({ isSystem }: Props) {
  const navigate = useNavigate();
  const data = approvalDetailMock;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContainer
          onClose={() => setIsOpen(false)}
          opacity="bg-opacity-50"
          className="flex w-[700px] flex-col items-center justify-center gap-18pxr border border-gray-300 bg-white py-32pxr"
        >
          <ModalHeader className="flex justify-between w-full items-center">
            <p>{data.data.docFileName}</p>
            <Button
              size="sm"
              className="absolute right-20pxr top-10pxr z-10 text-red"
              onClick={() => setIsOpen(false)}
            >
              x
            </Button>
          </ModalHeader>
          <ModalBody className="flex flex-col items-center text-dark-20 txt-bodySmall-regular">
            <img
              src={'/public/photo-main-slide3.jpg'}
              alt="결제 증빙 이미지"
              className="w-full h-full object-contain"
            />
          </ModalBody>
        </ModalContainer>
      </Modal>
      <div className="mx-auto max-w-page px-20pxr py-12pxr gap-20pxr flex flex-col">
        <div className="flex  gap-12pxr items-center">
          {!isSystem && (
            <span className="border px-12pxr rounded-md py-8pxr text-sm font-bold text-red-400">
              반려
            </span>
          )}
          <span className="border px-12pxr rounded-md py-8pxr text-sm font-bold">
            {data.data.paymentType.includes('management')
              ? '경영기획'
              : '인사회계'}
          </span>
          <span className="border px-12pxr rounded-md py-8pxr text-sm font-bold">
            {data.data.department}
          </span>
        </div>
        <div className="flex gap-12pxr items-center text-base font-bold justify-between flex-wrap">
          <span className="text-base font-bold">제목 : {data.data.title}</span>

          <Button
            size="sm"
            onClick={() => setIsOpen(true)}
            className="flex gap-12pxr items-center"
          >
            <span>파일명 : {data.data.docFileName}</span>
            <Icons.PictureBasic className="w-16pxr h-16pxr" />
          </Button>
          <span className="text-base font-semibold">
            생성일 : {data.data.createdAt}
          </span>
        </div>
        <div className="flex gap-12pxr border rounded-lg pl-12pxr py-4pxr min-h-[500px]">
          <Viewer initialValue={data.data.body} />
        </div>
        <Button
          className="w-fit"
          variant="smallMenu"
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </Button>
      </div>
    </>
  );
}
