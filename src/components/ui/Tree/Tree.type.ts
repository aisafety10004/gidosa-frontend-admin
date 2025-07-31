export interface OrgNode {
  key: string;
  department: string;
  name?: string;
  position?: string;
  email?: string;
  phone?: string;
  employeeId?: string;
  children?: OrgNode[];
}
