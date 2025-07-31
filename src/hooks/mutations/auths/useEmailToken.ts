import { authsApi } from '@/apis/auths.api';
import { mutationKeys } from '@/constants/keys/mutationKeys/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useEmailToken = () => {
  const sendEmailToken = useMutation({
    mutationKey: [mutationKeys.auths.sendEmailToken],
    mutationFn: authsApi.sendEmailToken,
    onError: () => {
      alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const validEmailToken = useMutation({
    mutationKey: [mutationKeys.auths.validEmailToken],
    mutationFn: authsApi.validEmailToken,
    onError: () => {
      alert('인증번호 확인에 실패했습니다. 다시 시도해주세요.');
    },
  });

  return { sendEmailToken, validEmailToken };
};
