export async function getCurrentLang(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  return locale;
}
