import Icons from '@/components/icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Popup({ isOpen, onClose, title, children }: Props) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center w-full h-full bg-black/10 pt-30pxr">
          <div className="bg-white p-4 rounded-lg w-3/4 max-w-page min-h-1/3 flex flex-col gap-12pxr px-16pxr py-12pxr max-h-2/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{title}</h2>
              <Icons.XCircleIcon
                className=" cursor-pointer hover:stroke-red-500"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
