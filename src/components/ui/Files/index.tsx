import Icons from '@/components/icons';
import { useAppFile } from '@/hooks/approvals/useAppFile';

export function Files() {
  const {
    fileInputRef,
    fileList,

    handleDeleteFile,
    handleFileChange,
    handleUploadClick,
  } = useAppFile();
  return (
    <div className="flex gap-12pxr border rounded-lg  py-4pxr items-center justify-between w-full">
      <div className="flex flex-col w-full">
        <div className="flex gap-12pxr items-center justify-between w-full px-12pxr py-4pxr border-b border-gray-200">
          <span className="text-sm font-bold">첨부파일 업로드</span>
          <div className="flex gap-4pxr items-center text-gray-400">
            <Icons.Plus
              className="w-16pxr h-16pxr cursor-pointer"
              onClick={handleUploadClick}
            />
            <span className="text-sm font-bold">파일 최대 크기 : 25MB</span>
          </div>
        </div>
        {!fileList.length ? (
          <div
            className="flex flex-col gap-4pxr items-center justify-center w-full px-8pxr py-24pxr cursor-pointer"
            onClick={handleUploadClick}
          >
            <Icons.PictureBasic className="w-40pxr h-40pxr fill-gray-400" />
            <span className="text-sm font-bold text-gray-400">
              파일 업로드 해주세요.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-4pxr items-start w-full px-12pxr py-4pxr">
            {/* <span className="text-sm font-bold">제목</span> */}
            <div className="flex flex-col gap-8pxr">
              {fileList.map((file) => (
                <div key={file.name} className="flex gap-4pxr items-center">
                  <Icons.XCircleIcon
                    className="w-16pxr h-16pxr cursor-pointer hover:stroke-red-500"
                    onClick={() => handleDeleteFile(file.name)}
                  />
                  <span className="text-sm font-bold text-gray-400">
                    {file.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept=".jpg, .png, .jpeg, .pdf"
        className="hidden"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}
