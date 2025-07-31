import { CustomEditor } from '@/components/ui/Editor/editor';
import { Input } from '@/components/ui/Input/Input';
import { MANAGEMENT_MIDDLE_MENU } from '@/constants/menus/manageMentMenu';
import { useAppPop } from '@/hooks/approvals/useAppPop';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '../ui/Button/Button';
import Dropdown from '../ui/Dropdown/Dropdown';
import { Files } from '../ui/Files';
import { ApprovalPopup } from '../ui/Popup/components/approvalPopup';
import { DocPopup } from '../ui/Popup/components/docPopup';
import { ApprovalButtons } from './buttons';
export function ApprovalRegister() {
  const [selectedDepartment, setSelectedDepartment] = useState('select');

  const departmentMenus = [
    { id: 'select', title: '업무분류' },
    ...MANAGEMENT_MIDDLE_MENU,
  ];

  const [editorFileList, setEditorFileList] = useState<
    { url: string; fileName: string }[]
  >([]);

  const { popState, popSetState, handleCheckSelected, handleSetSelectedDoc } =
    useAppPop();
  return (
    <>
      <DocPopup
        isDocOpen={popState.isDocOpen}
        setIsDocOpen={popSetState.setIsDocOpen}
        handleSetSelectedDoc={handleSetSelectedDoc}
      />
      <ApprovalPopup
        title="결재선 추가"
        isOpen={popState.isApprovalOpen}
        setIsOpen={popSetState.setIsApprovalOpen}
        list={popState.approvalList}
        setList={popSetState.setApprovalList}
        handleCheckSelected={() => handleCheckSelected('approval')}
      />
      <ApprovalPopup
        title="협조자 추가"
        isOpen={popState.isCooperatorOpen}
        setIsOpen={popSetState.setIsCooperatorOpen}
        list={popState.cooperatorList}
        setList={popSetState.setCooperatorList}
        handleCheckSelected={() => handleCheckSelected('cooperator')}
      />
      <div className="flex flex-col gap-20pxr mx-auto max-w-page px-20pxr py-12pxr">
        <div className="flex flex-col gap-12pxr">
          <div className="flex gap-12pxr items-center flex-wrap mobile:flex-col-reverse">
            <div className="flex gap-12pxr items-center flex-wrap mobile:w-full">
              <Dropdown
                menus={departmentMenus}
                selectedValue={selectedDepartment}
                setSelectedValue={setSelectedDepartment}
                className="border px-12pxr rounded-md py-8pxr text-sm font-bold "
              />
              <ApprovalButtons
                title="결재서식"
                disabled={selectedDepartment === 'select'}
                className={cn(
                  'text-gray-400 cursor-not-allowed',
                  selectedDepartment != 'select' &&
                    ' hover:bg-blue-500 hover:text-white cursor-pointer text-gray-600 border-gray-300 hover:border-none',
                )}
                callback={() =>
                  selectedDepartment != 'select' &&
                  popSetState.setIsDocOpen(!popState.isDocOpen)
                }
              />

              <ApprovalButtons
                title="결재선"
                callback={() =>
                  popSetState.setIsApprovalOpen(!popState.isApprovalOpen)
                }
              />
              <ApprovalButtons
                title="협조자"
                callback={() =>
                  popSetState.setIsCooperatorOpen(!popState.isCooperatorOpen)
                }
              />
            </div>
            <div className="flex items-center gap-4pxr flex-1 justify-end mobile:w-full mobile:justify-start">
              <span className="text-sm font-bold">작성자</span>
              <p className="text-sm">김유상 대리</p>
            </div>
          </div>
          {popState.isBtnActive && (
            <>
              <div className="flex gap-4pxr items-center">
                {popState.approvalList.length > 0 && (
                  <div className="flex gap-4pxr border rounded-md p-4pxr">
                    <p className="text-sm font-bold">결재선 : </p>
                    {popState.approvalList.map((el: any) => (
                      <div key={el.key} className="text-sm text-gray-500">
                        {el.data.name}
                      </div>
                    ))}
                  </div>
                )}
                {popState.cooperatorList.length > 0 && (
                  <div className="flex gap-6pxr border rounded-md p-4pxr items-center">
                    <p className="text-sm font-bold">협조자 : </p>
                    {popState.cooperatorList.map((el: any) => (
                      <div key={el.key} className="text-sm text-gray-500">
                        {el.data.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
          <div className="w-full gap-12pxr flex flex-col">
            <div className="flex gap-12pxr flex-1">
              <Input
                placeholder="문서제목"
                className="border px-12pxr rounded-sm py-8pxr text-sm font-bold w-1/2 outline-none"
              />
              <div className="w-1/2 border rounded-lg flex items-center justify-center text-gray-400 text-sm font-bold">
                {selectedDepartment !== 'select'
                  ? `${
                      MANAGEMENT_MIDDLE_MENU.find(
                        (el) => el.id === selectedDepartment,
                      )?.title
                    }-${new Date().toISOString().split('T')[0]}`
                  : '문서번호'}
              </div>
            </div>
          </div>
        </div>
        <Files />
        <div className="flex flex-col gap-12pxr">
          <CustomEditor
            body={popState.content}
            setBody={popSetState.setContent}
            setFileList={setEditorFileList}
          />
        </div>
        <div className="flex justify-center pb-20pxr gap-12pxr">
          <Button variant="smallMenuCancel" color="primary" className="w-1/2">
            취소
          </Button>
          <Button variant="smallMenu" color="primary" className="w-1/2">
            등록하기
          </Button>
        </div>
      </div>
    </>
  );
}
