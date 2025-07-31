import { ApprovalDetail } from '@/components/approval/detila';
import { Button } from '@/components/ui/Button/Button';
import { Title } from '@/components/ui/Title/Title';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function SystemApprovalDetail() {
  const [paymentStatus, setPaymentStatus] = useState<'complete' | 'fail'>();

  const payerList = [
    { id: '1', name: '관리자 사장', status: 'complete' },
    { id: '2', name: '김효동 부장', status: 'fail' },
    { id: '3', name: '안철수 과장', status: 'pending' },
  ];

  const userId = '3';

  return (
    <div className="mx-auto max-w-page px-20pxr py-12pxr gap-20pxr flex flex-col">
      <div className="flex justify-between h-full items-center mobile:flex-col-reverse mobile:items-start">
        <div className="flex-1 flex-col gap-12pxr mobile:w-full">
          <ApprovalDetail isSystem={true} />
        </div>

        <div className="w-1/4 px-12pxr py-8pxr h-full border border-gray-300 rounded-md flex flex-col gap-24pxr mobile:w-full">
          <div className="flex justify-between gap-12pxr">
            <Button
              variant="smallMenu"
              className={cn(
                'flex-1',
                paymentStatus === 'complete' && 'bg-blue-500 text-white',
              )}
              onClick={() => setPaymentStatus('complete')}
            >
              승인
            </Button>
            <Button
              variant="smallMenu"
              className={cn(
                'flex-1',
                paymentStatus === 'fail' && 'bg-red-500 text-white',
              )}
              onClick={() => setPaymentStatus('fail')}
            >
              반려
            </Button>
          </div>
          {payerList.map((el) => (
            <div
              key={el.id}
              className="w-full py-8pxr border border-gray-300 flex justify-center items-center rounded-md"
            >
              <div className="flex items-center justify-center w-full relative">
                {userId === el.id && (
                  <div className="w-10pxr h-10pxr rounded-full bg-green-500  absolute left-10pxr" />
                )}
                <p className="text-14pxr font-semibold">{el.name}</p>
                <div className="absolute top-0pxr right-10pxr">
                  <span
                    className={cn(
                      'text-14pxr font-semibold text-gray-400',
                      el.status === 'complete' && 'text-blue-500',
                      el.status === 'fail' && 'text-red-500',
                    )}
                  >
                    {el.status === 'complete'
                      ? '승인'
                      : el.status === 'fail'
                      ? '반려'
                      : '대기'}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-12pxr">
            <Title className="text-16pxr font-bold">비고란</Title>
            <textarea
              placeholder="입력란."
              className="border rounded-sm h-[400px] w-full resize-none outline-none p-12pxr text-14pxr font-semibold  mobile:h-auto"
            ></textarea>
          </div>
          <Button variant="smallMenu" className="w-full">
            결제 하기
          </Button>
        </div>
      </div>
    </div>
  );
}
