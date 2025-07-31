import { Button } from '@/components/ui/Button/Button';
import { useState } from 'react';

import { CLIENT_PATHS } from '@/constants/paths/client.path';
import { ApprovalTableRow } from '@/models/interfaces/tables/approval.interface';
import approvalListMock from '@/models/mock/approvalListMock.json';
import { formatDate } from '@/utils/formatDate';
import { cn } from '@/utils/styleClsx';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../ui/Dropdown/Dropdown';
import { Input } from '../ui/Input/Input';

export default function Management() {
  const navigate = useNavigate();
  const menus = [
    { id: 'all', title: '= 분류선택 =' },
    { id: 'shareholder', title: '주주관리' },
    { id: 'development', title: '개발사업' },
    { id: 'document', title: '문서관리' },
    { id: 'law', title: '법무관리' },
    { id: 'crisis', title: '위기관리' },
    { id: 'regulation', title: '사규관리' },
    { id: 'etc', title: '기타자료' },
  ];

  const rows: ApprovalTableRow[] = approvalListMock.data
    .list as ApprovalTableRow[];

  const columnDefs = [
    { field: 'department', header: '부서명', sortable: true },
    { field: 'docId', header: '문서번호', sortable: true },
    { field: 'docTitle', header: '문서제목', sortable: true },
    { field: 'draft', header: '기안자', sortable: true },
    {
      field: 'createdAt',
      header: '생성일',
      body: (row: any) => formatDate(row.createdAt),
      sortable: true,
    },
    { field: 'approver', header: '결재권자', sortable: true },
    {
      field: 'approvalDate',
      header: '결재일',
      body: (row: any) => row.approvalDate && formatDate(row.approvalDate),
      sortable: true,
    },
    {
      field: 'note',
      header: '비고',
      sortable: true,
      body: (row: ApprovalTableRow) => {
        const note = row.note;
        let title, color;
        if (note === 'complete') {
          title = '승인';
          color = 'text-green-500';
        } else if (note === 'fail') {
          title = '반려';
          color = 'text-red-500';
        } else if (note === 'pending') {
          title = '대기';
          color = '';
        } else if (note === 'delete') {
          title = '패기';
          color = 'text-gray-300';
        }
        return <p className={cn(color)}>{title}</p>;
      },
    },
  ];

  const [selectedValue, setSelectedValue] = useState(menus[0].id);

  const handlePaymentRegister = () => {
    navigate(CLIENT_PATHS.APPROVAL.REGISTER);
  };

  return (
    <div className="flex flex-col gap-20pxr mx-auto max-w-page px-20pxr">
      <div className="flex gap-16pxr mobile:flex-col">
        <div className="flex gap-16pxr flex-wrap">
          <Input
            placeholder="문서명"
            className="border px-8pxr py-4pxr rounded-sm text-sm outline-none"
          />
        </div>
        <div className="flex gap-16pxr">
          <Dropdown
            menus={menus}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            className="h-full border text-sm rounded-sm"
          />
          <Button className="text-sm px-12pxr py-8pxr border rounded-lg hover:bg-blue-500 hover:text-white">
            검색
          </Button>
        </div>
        <div className="flex gap-8pxr items-center justify-end flex-1 mobile:justify-start">
          <Button
            onClick={handlePaymentRegister}
            className="text-sm px-12pxr py-8pxr border rounded-lg hover:bg-blue-500 hover:text-white"
          >
            결제 등록
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full flex flex-col gap-12pxr pb-40pxr">
        <div className=" h-[500px] overflow-x-auto border">
          <DataTable
            value={rows}
            removableSort
            tableStyle={{ minWidth: '50rem' }}
            onRowClick={(e) => {
              navigate(`${CLIENT_PATHS.APPROVAL.MAIN}/${e.data.id}`);
            }}
            rowClassName={() => 'hover:bg-gray-100 cursor-pointer transition'}
          >
            {columnDefs.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                body={col.body}
                sortable={col.sortable}
                headerStyle={{ textAlign: 'center' }}
              />
            ))}
          </DataTable>
        </div>
      </div>
    </div>
  );
}
