import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

// ✅ 1. 기본 에디터 스타일 먼저!
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import 'tui-color-picker/dist/tui-color-picker.css';

interface CustomEditorProps {
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
  setFileList: Dispatch<SetStateAction<{ url: string; fileName: string }[]>>;
}

type AddImageBlobHook = (
  blob: Blob | File,
  callback: (url: string, text?: string) => void,
) => void;

const toolbarItems = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'link'], // 'task' 'table'
  ['image'],
  ['code', 'codeblock'],
  ['scrollSync'],
];

export function CustomEditor({
  body,
  setBody,
  setFileList,
}: CustomEditorProps) {
  const editorRef = useRef<Editor>(null);

  const onChangeGetHTML = () => {
    // 에디터에 입력된 내용을 HTML 태그 형태로 취득
    const content = editorRef.current?.getInstance().getHTML();
    const cleaned = content !== '<p><br></p>' ? content : '';
    console.log(cleaned);
    // Body에 담기
    setBody(cleaned);

    const parser = new DOMParser();
    const doc = parser.parseFromString(cleaned, 'text/html');
    const currentImageSrcs = Array.from(doc.querySelectorAll('img')).map(
      (img) =>
        img.src.replace(
          `${process.env.NEXT_PUBLIC_JOBIO_RESOURCES_PUB_IMAGE_URL}/`,
          '',
        ),
    );

    setFileList((prevImages) => {
      const remainingImages = prevImages.filter((img) =>
        currentImageSrcs.includes(img.url),
      );

      return remainingImages;
    });
  };

  const handleAddImageBlobHook: AddImageBlobHook = useCallback(
    (blob, callback) => {
      const file =
        blob instanceof File
          ? blob
          : new File([blob], `image-${Date.now()}.png`, {
              type: blob.type,
              lastModified: Date.now(),
            });
      console.log(file);

      return false;
      //   imageUploadMutate(
      //     {
      //       files: [file],
      //       dirName: 'community',
      //     },
      //     {
      //       onSuccess: (data) => {
      //         callback(
      //           `${process.env.NEXT_PUBLIC_JOBIO_RESOURCES_PUB_IMAGE_URL}/${data.data[0].url}`,
      //           data.data[0].fileName,
      //         );
      //         setImageList((prevImages) => [
      //           ...prevImages,
      //           {
      //             url: data.data[0].url,
      //             fileName: data.data[0].fileName,
      //             size: data.data[0].size,
      //             isThumbnail: false,
      //           },
      //         ]);
      //       },
      //       onError: () => {
      //         toast({
      //           message: '이미지 업로드에 실패했습니다.',
      //           type: 'error',
      //         });
      //       },
      //     },
      //   );
      //   return false;
    },
    [setFileList],
    // [imageUploadMutate, toast, setImageList],
  );

  // 🔽 에디터 초기값 동기화
  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) return;

    if (body && editorInstance.getHTML() !== body) {
      editorInstance.setHTML(body);
    }
  }, [body]);

  return (
    <div className="h-[600px] mobile:h-[300px]">
      <Editor
        toolbarItems={toolbarItems}
        height="100%" // 에디터 창 높이
        initialEditType="wysiwyg"
        placeholder="내용을 입력해주세요."
        previewStyle={'vertical'} // 미리보기 스타일 (or tab) (verttical은 양쪽이 나뉨)
        hideModeSwitch={true}
        ref={editorRef} // ref 참조
        language="ko-KR"
        minBodyHeight={1000}
        onChange={onChangeGetHTML} // onChange 이벤트
        // hooks={{
        //   addImageBlobHook: handleAddImageBlobHook,
        // }}
        plugins={[colorSyntax]}
        initialValue={' '}
      ></Editor>
    </div>
  );
}
