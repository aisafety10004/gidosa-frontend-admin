import { authsApi } from '@/apis/auths.api';
import { mutationKeys } from '@/constants/keys/mutationKeys/mutationKeys';
import { CLIENT_PATHS } from '@/constants/paths/client.path';
import { useAuthStore } from '@/utils/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [mutationKeys.auths.login],
    mutationFn: authsApi.login,
    onSuccess: (response) => {
      if (response.status === 200) {
        const { accessToken, authority } = response.data;

        useAuthStore.getState().setAuth(accessToken, authority);
        localStorage.setItem('authority', authority);

        const redirectUrl =
          authority === 'ROLE_SUPER_ADMIN'
            ? CLIENT_PATHS.ADMIN.BASE
            : authority === 'ROLE_CORPORATION_USER'
              ? CLIENT_PATHS.CORPORATION.BASE
              : CLIENT_PATHS.VENDOR.BASE;
        navigate(redirectUrl, { replace: true });
      }
    },
    onError: () => {
      // TODO: 에러 메시지 분기 처리 하기
      alert(
        '가입하지 않은 계정이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.'
      );
    },
  });
};
