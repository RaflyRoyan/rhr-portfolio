/** Balik tema dan simpan pilihan di sessionStorage (kunjungan berikutnya kembali terang). */
export function toggleTheme() {
  const dark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', dark);
  try {
    sessionStorage.setItem('rhr-theme', dark ? 'dark' : 'light');
  } catch {}
}
