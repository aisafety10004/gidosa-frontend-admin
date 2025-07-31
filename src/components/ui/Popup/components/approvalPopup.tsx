import { Dispatch, SetStateAction } from 'react';
import OrgTreeTable from '../../Tree/folderTree';
import { Popup } from '../index';

import orgTreeListMock from '@/models/mock/orgTreeListMock.json';
import { OrgNode } from '../../Tree/Tree.type';

interface props {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  list: OrgNode[];
  setList: Dispatch<SetStateAction<OrgNode[]>>;
  handleCheckSelected: () => void;
}

export function ApprovalPopup({
  title,
  isOpen,
  setIsOpen,
  list,
  setList,
  handleCheckSelected,
}: props) {
  const orgTreeList: OrgNode[] = orgTreeListMock.data
    .list as unknown as OrgNode[];

  return (
    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
      <OrgTreeTable
        data={orgTreeList}
        list={list}
        setList={setList}
        handleCheckSelected={handleCheckSelected}
      />
    </Popup>
  );
}
