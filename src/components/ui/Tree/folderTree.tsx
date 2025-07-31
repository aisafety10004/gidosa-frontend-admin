import { cn } from '@/lib/utils';
import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import { Dispatch, SetStateAction } from 'react';
import { useTreeHandle } from '../../../hooks/useTreeHandle';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { OrgNode } from './Tree.type';

interface props {
  data: OrgNode[];
  list: OrgNode[];
  setList: Dispatch<SetStateAction<OrgNode[]>>;
  handleCheckSelected: () => void;
}

export default function OrgTreeTable({
  data,
  list,
  setList,
  handleCheckSelected,
}: props) {
  const {
    selectedNodeKeys,
    expandedKeys,
    filteredData,
    inputRef,
    columns,

    setExpandedKeys,
    handleFilter,
    onSelectionChange,
    onRowClick,
    handleReset,
  } = useTreeHandle({
    data,
    selectList: list,
    setSelectList: setList,
  });

  return (
    <div className="flex flex-col gap-4pxr h-[600px] overflow-y-auto mobile:h-[500px]">
      <div className="flex justify-between mobile:flex-col mobile:gap-4pxr">
        <Input
          ref={inputRef}
          type="text"
          placeholder="테이블 데이터 검색"
          onChange={handleFilter}
          className="outline-none border pl-10pxr py-8pxr rounded-md"
        />
        <div className="flex gap-4pxr">
          <Button variant="smallMenu" onClick={handleReset}>
            초기화
          </Button>
          <Button variant="smallMenu" onClick={handleCheckSelected}>
            추가
          </Button>
        </div>
      </div>

      {/* ✅ 이 div에 overflow-x-auto */}
      <div className="overflow-x-auto">
        <TreeTable
          value={filteredData}
          selectionMode="checkbox"
          selectionKeys={selectedNodeKeys}
          onSelectionChange={onSelectionChange}
          expandedKeys={expandedKeys}
          onToggle={(e) => setExpandedKeys(e.value)}
          onRowClick={onRowClick}
          className="border border-b-0 rounded-md"
          tableStyle={{ minWidth: '900px' }} // ✅ 충분한 넓이
          rowClassName={() => ({
            'border-b border-gray-200': true,
          })}
        >
          {columns.map(({ field, header, expander, minWidth, className }) => (
            <Column
              key={field}
              field={field}
              header={header}
              expander={expander}
              style={{ minWidth: `${minWidth}px` }}
              bodyClassName={cn(
                'whitespace-nowrap overflow-hidden text-ellipsis',
                className,
              )}
              body={(rowData) => rowData.data?.[field] ?? ''}
            />
          ))}
        </TreeTable>
      </div>
    </div>
  );
}
