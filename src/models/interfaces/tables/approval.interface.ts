export interface ApprovalTableRow {
  id: number;
  department: string;
  docId: string;
  docTitle: string;
  draft: string;
  createdAt: string; // 또는 Date
  approver: string;
  approvalDate?: string; // 또는 Date | null
  note: 'complete' | 'fail' | 'pending' | 'delete' | '';
}
