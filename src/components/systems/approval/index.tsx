export default function SystemPayment() {
  // const navigate = useNavigate();
  // const rows: GridRowsProp = approvalListMock.data.list.map((el) => {
  //   return {
  //     ...el,
  //     paymentStatus:
  //       el.paymentStatus === 'complete'
  //         ? '승인'
  //         : el.paymentStatus === 'fail'
  //         ? '반려'
  //         : '대기',
  //   };
  // });
  // const columns: GridColDef[] = [
  //   {
  //     field: 'id',
  //     headerName: 'No',
  //     minWidth: 50,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'name',
  //     headerName: '이름',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'title',
  //     headerName: '제목',
  //     flex: 2,
  //     minWidth: 200,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'paymentStatus',
  //     headerName: '결제상태',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //     renderCell: (params) => {
  //       return (
  //         <div
  //           className={cn(
  //             'text-white w-full',
  //             params.row.paymentStatus === '승인' && 'bg-green-500 ',
  //             params.row.paymentStatus === '반려' && 'bg-red-500',
  //             params.row.paymentStatus === '대기' && 'bg-gray-300',
  //           )}
  //         >
  //           {params.row.paymentStatus}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     field: 'docId',
  //     headerName: '문서번호',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'docFileName',
  //     headerName: '문서명',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'createdAt',
  //     headerName: '생성일',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  //   {
  //     field: 'department',
  //     headerName: '부서명',
  //     flex: 1,
  //     minWidth: 100,
  //     headerAlign: 'center',
  //     align: 'center',
  //   },
  // ];
  // const handleRowDoubleClick = (params: GridRowParams) => {
  //   navigate(`${CLIENT_PATHS.SYSTEM.PAYMENT}/${params.row.id}`);
  // };
  // return (
  //   <div className="flex flex-col gap-12pxr">
  //     <div className="flex flex-col gap-12pxr">
  //       <div className="flex flex-col gap-12pxr">결제함</div>
  //     </div>
  //     <div className=" h-[700px] overflow-x-auto">
  //       <DataGrid
  //         rows={rows}
  //         columns={columns}
  //         hideFooter
  //         sx={{
  //           '& .MuiDataGrid-cell': {
  //             padding: 0,
  //           },
  //         }}
  //         onRowDoubleClick={handleRowDoubleClick}
  //       />
  //     </div>
  //   </div>
  // );
}
