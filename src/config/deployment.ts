export function resolveBasePath(value = process.env.NEXT_PUBLIC_BASE_PATH) {
  const basePath = value?.trim() ?? "";

  if (!basePath) return "";

  if (
    !basePath.startsWith("/") ||
    basePath.endsWith("/") ||
    basePath.includes("//") ||
    basePath.includes("?") ||
    basePath.includes("#")
  ) {
    throw new Error(
      "NEXT_PUBLIC_BASE_PATH must be empty or a path like /repository-name, without a trailing slash.",
    );
  }

  return basePath;
}
