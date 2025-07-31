import { OrgNode } from '@/components/ui/Tree/Tree.type';

export const findNodeByKey = (
  nodes: OrgNode[],
  key: string,
): OrgNode | null => {
  for (const node of nodes) {
    if (node.key === key) return node;
    if (node.children) {
      const found = findNodeByKey(node.children, key);
      if (found) return found;
    }
  }
  return null;
};

export const deptFilterTree = (data: OrgNode[], filter: string) => {
  if (!filter.trim()) return data;
  const filterNodes = (nodes: any[]): OrgNode[] =>
    nodes
      .map((node) => {
        if (node.data?.department?.includes(filter)) return node;
        else if (node.data?.name?.includes(filter)) return node;
        else if (node.data?.email?.includes(filter)) return node;
        else if (node.data?.phone?.includes(filter)) return node;
        else if (node.data?.position?.includes(filter)) return node;
        else if (node.data?.employeeId?.includes(filter)) return node;

        if (node.children) {
          const filteredChildren = filterNodes(node.children);
          if (filteredChildren.length > 0)
            return { ...node, children: filteredChildren };
        }
        return null;
      })
      .filter((n): n is OrgNode => !!n);

  return filterNodes(data);
};
