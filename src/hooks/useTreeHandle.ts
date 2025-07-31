import { deptFilterTree, findNodeByKey } from '@/utils/trees/trConfig';
import { debounce } from 'lodash';
import { OrgNode } from '../components/ui/Tree/Tree.type';

import {
  TreeTableEvent,
  TreeTableSelectionEvent,
  TreeTableSelectionKeysType,
} from 'primereact/treetable';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface props {
  data: OrgNode[];
  selectList: OrgNode[];
  setSelectList: Dispatch<SetStateAction<OrgNode[]>>;
}

export const useTreeHandle = ({ data, selectList, setSelectList }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedNodeKeys, setSelectedNodeKeys] =
    useState<TreeTableSelectionKeysType>({});

  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>(
    {},
  );

  const columns = [
    {
      field: 'department',
      header: '부서명',
      expander: true,
      minWidth: 30,
      className: 'cursor-pointer',
    },
    { field: 'name', header: '이름', minWidth: 100 },
    { field: 'email', header: '이메일', minWidth: 150 },
    { field: 'phone', header: '전화번호', minWidth: 120 },
    { field: 'position', header: '직책', minWidth: 100 },
    { field: 'employeeId', header: '사원번호', minWidth: 100 },
  ];

  const [filteredData, setFilteredData] = useState<OrgNode[]>(data);

  // ✅ 디바운스 처리
  const debouncedFilter = useMemo(() => {
    return debounce((value: string) => {
      const filtered = deptFilterTree(data, value);
      setFilteredData(filtered);
    }, 500);
  }, [data]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedFilter(value);
  };

  // ✅ 선택 변경 시 처리
  const onSelectionChange = (e: TreeTableSelectionEvent) => {
    const newKeys = e.value as TreeTableSelectionKeysType;

    // 기존 keys와 비교해서 변화된 key 찾기
    const oldKeys = selectedNodeKeys || {};
    const addedKey = Object.keys(newKeys).find((key) => !oldKeys[key]);
    const removedKey = Object.keys(oldKeys).find((key) => !newKeys[key]);

    // 선택된 노드 배열 직접 관리
    setSelectList((prev) => {
      if (addedKey) {
        const addedNode = findNodeByKey(filteredData, addedKey);
        if (
          addedNode &&
          (!addedNode.children || addedNode.children.length === 0)
        ) {
          return [...prev, addedNode]; // leaf만 추가
        }
      }

      if (removedKey) {
        return prev.filter((node) => node.key !== removedKey);
      }

      return prev;
    });

    setSelectedNodeKeys(newKeys);
  };

  // ✅ 행 클릭 시 처리
  const onRowClick = (e: TreeTableEvent) => {
    const nodeKey = e.node.key;
    setExpandedKeys((prev) => {
      const updated = { ...prev };
      if (updated[nodeKey!]) {
        delete updated[nodeKey!]; // 닫기
      } else {
        updated[nodeKey!] = true; // 열기
      }
      return updated;
    });
  };

  // ✅ 리셋 처리
  const handleReset = () => {
    setSelectedNodeKeys({});
    setSelectList([]);
    if (inputRef.current) {
      inputRef.current.value = '';
      const filtered = deptFilterTree(data, '');
      setFilteredData(filtered);
    }
  };

  // ✅ 초기 선택 처리
  useEffect(() => {
    const selectionMap: TreeTableSelectionKeysType = {};

    selectList.forEach((node: any) => {
      selectionMap[node.key] = { checked: true, partialChecked: true }; // leaf만 체크되었다고 가정
    });

    setSelectedNodeKeys(selectionMap);
  }, [setSelectList]);

  return {
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
  };
};
