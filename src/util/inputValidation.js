function isValidUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // 프로토콜
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // 도메인 이름
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // 또는 IP (v4) 주소
      "(\\:\\d+)?" + // 포트
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // 경로
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // 쿼리 문자열
      "(\\#[-a-z\\d_]*)?$",
    "i" // 프래그먼트 식별자
  );
  return pattern.test(url);
}
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
export { isValidUrl, escapeHtml };
