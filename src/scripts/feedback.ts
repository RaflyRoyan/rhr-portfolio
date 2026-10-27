import { ui } from '../i18n/ui';

let hideTimer: number | undefined;

/** Tampilkan toast global (elemen #toast di BaseLayout). */
export function showToast(message: string) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.dataset.open = 'true';
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => {
    toast.dataset.open = 'false';
  }, 2400);
}

/** Salin teks ke clipboard; fallback execCommand untuk konteks non-secure. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

export async function copyEmail(email: string) {
  const ok = await copyText(email);
  // Bahasa toast mengikuti halaman yang sedang dibuka
  const { toast } = ui[document.documentElement.lang === 'en' ? 'en' : 'id'];
  showToast(ok ? toast.copied : toast.failed + email);
}
