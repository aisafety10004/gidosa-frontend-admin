import { CLIENT_PATHS } from '@/constants/paths/client.path';
import { cn } from '@/utils/styleClsx';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import Separator from '../ui/Separator/Separator';
import { Title } from '../ui/Title/Title';

export function AuthLogin() {
  // const [authorityRole, setAuthorityRole] =
  //   useState<TAuthority>('ROLE_SUPER_ADMIN');

  // const { mutate: login } = useLogin();

  // const form = useForm<TSigninFormSchema>({
  //   resolver: zodResolver(SigninFormSchema),
  //   defaultValues: {
  //     loginId: '',
  //     password: '',
  //     authority: AUTHORITY_ENUMS.ROLE_SUPER_ADMIN,
  //   },
  // });

  const handleSignInSubmit = (data: any) => {
    // login(data);
  };

  const handleAuthorityRoleChange = (role: any) => {
    // setAuthorityRole(role);
    // form.setValue('authority', role);
  };

  return (
    <div className="flex max-w-[480px] flex-1 flex-col">
      <div className="flex-1">
        <Title className="mb-32pxr text-center text-3xl font-bold">
          관리자 로그인
        </Title>
        <form
          className="overflow-hidden rounded-lg border border-gray-300"
          onSubmit={handleSignInSubmit}
        >
          <div className="flex flex-col gap-24pxr px-24pxr py-40pxr">
            {/* 로그인 입력 폼 */}
            <div className="flex flex-col gap-16pxr">
              <Input
                placeholder="아이디"
                className={cn(
                  'h-52pxr w-full overflow-hidden rounded-md border border-gray-400 px-12pxr',
                  // formState.errors.loginId && 'border-red-500',
                )}
                // {...field}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                className={cn(
                  'h-52pxr w-full overflow-hidden rounded-md border border-gray-400 px-12pxr',
                  // formState.errors.password && 'border-red-500',
                )}
                // {...field}
              />
              {/* <Controller
                control={form.control}
                name="loginId"
                render={({ field, formState }) => (
                  <Input
                    placeholder="아이디"
                    className={cn(
                      'h-52pxr w-full overflow-hidden rounded-md border border-gray-400 px-12pxr',
                      formState.errors.loginId && 'border-red-500',
                    )}
                    {...field}
                  />
                )}
              /> */}
              {/* <Controller
                control={form.control}
                name="password"
                render={({ field, formState }) => (
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    className={cn(
                      'h-52pxr w-full overflow-hidden rounded-md border border-gray-400 px-12pxr',
                      formState.errors.password && 'border-red-500',
                    )}
                    {...field}
                  />
                )}
              /> */}
            </div>

            {/* 아이디/비밀번호 찾기 */}
            <div className="flex items-center justify-end gap-12pxr text-sm">
              <Link
                to={CLIENT_PATHS.AUTH.FIND_ID}
                className="text-gray-500 hover:text-gray-600 hover:underline"
              >
                아이디 찾기
              </Link>
              <Separator direction="vertical" />
              <Link
                to={CLIENT_PATHS.AUTH.FIND_PW}
                className="text-gray-500 hover:text-gray-600 hover:underline"
              >
                비밀번호 찾기
              </Link>
            </div>

            <Button className="h-60pxr rounded-md bg-gray-700 text-lg font-semibold text-white transition-all hover:bg-gray-600">
              로그인
            </Button>
          </div>
        </form>
        <p className="mt-24pxr flex justify-center text-sm text-gray-500">
          아직 회원이 아니신가요?
          <Link
            to={CLIENT_PATHS.AUTH.SIGN_UP}
            className="ml-8pxr text-gray-800 hover:underline"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
