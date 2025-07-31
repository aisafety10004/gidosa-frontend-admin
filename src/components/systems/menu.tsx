import { cn } from '@/lib/utils';
import SystemMock from '@/models/mock/systemMock.json';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import { Button } from '../ui/Button/Button';

export default function SystemMenu() {
  const menus = [
    {
      id: 1,
      name: '경영기획',
      path: '/system/menu1',
    },
    {
      id: 2,
      name: '인사회계',
      path: '/system/menu1',
    },
    {
      id: 3,
      name: '영업관리',
      path: '/system/menu1',
    },
    {
      id: 4,
      name: '시공관리',
      path: '/system/menu1',
    },
    {
      id: 5,
      name: '안전관리',
      path: '/system/menu1',
    },
    {
      id: 6,
      name: '현장관리',
      path: '/system/menu1',
    },
  ];

  const rows: GridRowsProp = SystemMock.data.list;

  // (2) 사용자 활성/비활성 토글 상태 예시 (id → boolean)
  const [usageMap, setUsageMap] = useState<Record<number, boolean>>(
    rows.reduce((acc, row) => ({ ...acc, [row.id]: row.isUse }), {}),
  );

  // (3) 체크박스 클릭 핸들러
  const handleToggleUsage = (id: number) => {
    setUsageMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'No',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: '이름',
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: '이메일',
      flex: 2,
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'phone',
      headerName: '전화번호',
      flex: 2,
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'role',
      headerName: '역할',
      flex: 2,
      minWidth: 200,
    },
    {
      field: '사용여부',
      headerName: '사용여부',
      flex: 2,
      minWidth: 200,
      renderCell: (params) => (
        <Checkbox
          checked={usageMap[params.row.id]}
          onChange={() => handleToggleUsage(params.row.id)}
          color="primary"
          size="small"
        />
      ),
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menus[0].id);
  return (
    <div className="flex gap-12pxr h-full">
      <div className="flex flex-col gap-12pxr">
        <Button
          color="primary"
          className="text-sm px-12pxr py-4pxr border rounded-md"
        >
          메뉴 추가
        </Button>
        <div className="border rounded-md h-full p-24pxr gap-12pxr flex flex-col">
          {menus.map((menu) => (
            <Button
              key={menu.id}
              variant="smallMenu"
              className={cn(
                selectedMenu === menu.id && 'bg-blue-500 text-white',
              )}
              onClick={() => setSelectedMenu(menu.id)}
            >
              {menu.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="border rounded-md h-full p-24pxr flex-1">
        <div className="flex flex-col gap-12pxr">사용자 리스트</div>
        <div className=" h-[500px] overflow-x-auto">
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter
            // onRowDoubleClick={handleRowDoubleClick}
          />
        </div>
      </div>
    </div>
  );
}
