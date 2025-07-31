import { useRef, useState } from 'react';

export const useAppFile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFileList((prev) => [...prev, ...Array.from(selectedFiles)]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setFileList((prev) => prev.filter((file) => file.name !== fileName));
  };

  return {
    fileInputRef,
    fileList,

    handleFileChange,
    handleUploadClick,
    handleDeleteFile,
  };
};
