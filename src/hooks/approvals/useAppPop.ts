import { useToast } from '@/components/ui/alerts/Toaster/useToast';
import { OrgNode } from '@/components/ui/Tree/Tree.type';
import { DataTableSelectEvent } from 'primereact/datatable';
import { useState } from 'react';

export const useAppPop = () => {
  const [isDocOpen, setIsDocOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isCooperatorOpen, setIsCooperatorOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const [approvalList, setApprovalList] = useState<OrgNode[]>([]);
  const [cooperatorList, setCooperatorList] = useState<OrgNode[]>([]);

  const { toast } = useToast();

  const handleCheckSelected = (type: 'approval' | 'cooperator') => {
    setIsBtnActive(true);

    const length =
      type === 'approval' ? approvalList.length : cooperatorList.length;

    if (!length) {
      const message =
        type === 'approval' ? '결재선을 추가해주세요' : '협조자를 추가해주세요';

      toast({ message, type: 'error' });
      return;
    }

    type === 'approval' ? setIsApprovalOpen(false) : setIsCooperatorOpen(false);
  };
  const [content, setContent] = useState<string>('');
  const handleSetSelectedDoc = (e: DataTableSelectEvent) => {
    setContent(e.data.content);
    setIsDocOpen(false);
  };

  return {
    popState: {
      isDocOpen,
      isApprovalOpen,
      isCooperatorOpen,
      isBtnActive,
      approvalList,
      cooperatorList,
      content,
    },
    popSetState: {
      setIsDocOpen,
      setIsApprovalOpen,
      setIsCooperatorOpen,
      setIsBtnActive,
      setApprovalList,
      setCooperatorList,
      setContent,
    },
    handleCheckSelected,
    handleSetSelectedDoc,
  };
};
