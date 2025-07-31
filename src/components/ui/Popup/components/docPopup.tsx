import docsListMock from '@/models/mock/docsListMock.json';
import { Column } from 'primereact/column';
import { DataTable, DataTableSelectEvent } from 'primereact/datatable';
import { Dispatch, SetStateAction, useState } from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import { Popup } from '../index';

interface props {
  isDocOpen: boolean;
  setIsDocOpen: Dispatch<SetStateAction<boolean>>;
  handleSetSelectedDoc: (e: DataTableSelectEvent) => void;
}

export function DocPopup({
  isDocOpen,
  setIsDocOpen,
  handleSetSelectedDoc,
}: props) {
  const docTypeList = [
    {
      id: 'select',
      title: '서식 선택',
    },
    {
      id: '안전보건',
      title: '안전보건',
    },
    {
      id: '환경',
      title: '환경',
    },
    {
      id: '일반',
      title: '일반',
    },
    {
      id: '근태',
      title: '근태',
    },
  ];
  const [selectedDocType, setSelectedDocType] = useState<string>('select');

  const docsList = docsListMock.data.list;
  const columnDefs = [
    { field: 'type', header: '서식 유형' },
    { field: 'name', header: '서식 이름' },
    { field: 'description', header: '서식 설명' },
    { field: 'createdAt', header: '생성일' },
  ];

  const filteredDocsList =
    selectedDocType === 'select'
      ? docsList
      : docsList.filter((doc) => doc.type === selectedDocType);

  return (
    <Popup
      isOpen={isDocOpen}
      onClose={() => setIsDocOpen(false)}
      title="결재서식"
    >
      <div className="flex flex-col gap-12pxr">
        <div className="flex gap-12pxr">
          <Dropdown
            menus={docTypeList}
            selectedValue={selectedDocType}
            setSelectedValue={setSelectedDocType}
            className="border px-12pxr rounded-md py-8pxr text-sm font-bold "
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            value={filteredDocsList}
            selectionMode="single"
            onRowSelect={(e) => handleSetSelectedDoc(e)}
            tableStyle={{ minWidth: '600px' }} // ✅ 충분한 넓이
            rowClassName={() => ({
              'border-b border-gray-200': true,
            })}
            className="h-[600px] mobile:h-[300px]"
          >
            <Column
              header=" "
              body={(rowData, options) => options.rowIndex + 1}
              style={{ width: '50px', textAlign: 'center' }}
            />
            {columnDefs.map(({ field, header }) => (
              <Column
                key={field}
                field={field}
                header={header}
                body={(rowData) => rowData?.[field] ?? ''}
                bodyClassName="text-sm font-bold"
              />
            ))}
          </DataTable>
        </div>
      </div>
    </Popup>
  );
}
