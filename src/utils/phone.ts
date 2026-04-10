/**
 * 국내 휴대폰: 010/011/016/017/018/019 + 10~11자리
 * 국내 유선: 02(서울) + 9~10자리 / 031~064 + 10~11자리
 * 국제: + 로 시작
 */
const PHONE_REGEX =
  /^(\+[\d\s\-().]{7,20}|02-\d{3,4}-\d{4}|0[13-9]\d-\d{3,4}-\d{4})$/;

/** 숫자만 추출 */
const digitsOnly = (value: string) => value.replace(/\D/g, "");

/**
 * 국내 번호 자동 포매팅
 * - 국제 번호(+로 시작)는 그대로 반환
 * - 백스페이스 흐름을 위해 raw 값 기준으로 digits만 추출 후 재조합
 */
export function formatPhoneNumber(raw: string): string {
  if (raw.startsWith("+")) return raw;

  const digits = digitsOnly(raw);

  // 서울 지역번호 02
  if (digits.startsWith("02")) {
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 10) return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }

  // 휴대폰(010~019) + 지역번호(031~064): 앞 3자리 고정
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 11) return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

/** submit 시점 검증 */
export function validatePhone(value: string): string {
  if (!value.trim()) return "연락처를 입력해주세요";
  if (!PHONE_REGEX.test(value.trim()))
    return "올바른 연락처 형식을 입력해주세요 (예: 010-1234-5678 또는 +82 10 1234 5678)";
  return "";
}
