import { z } from "zod";

export const PersonaSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  gender: z.string().min(1, '성별을 입력해주세요.'),
  age: z.string().min(1, '나이를 입력해주세요.'),
  family: z.string().min(1, '가족관계를 입력해주세요.'),
  job: z.string().min(1, '직업을 입력해주세요.'),
  income: z.string().min(1, '소득을 입력해주세요.'),
  address: z.string().min(1, '주소를 입력해주세요.'),
  personality: z.string().min(1, '성격/성향을 입력해주세요.'),
  interest: z.string().min(1, '관심사를 입력해주세요.'),
  lifeStyle: z.string().min(1, '생활습관을 입력해주세요.'),
  problem: z.string().min(1, '문제상황을 입력해주세요.'),
  interview: z.string().min(1, '인터뷰를 입력해주세요.'),
});
