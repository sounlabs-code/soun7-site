"use client";

import { useEffect, useRef } from "react";

/** Full-screen player for the product films, in a phone frame. */
export default function VideoModal({
  src,
  poster,
  title,
  closeLabel,
  onClose,
}: {
  src: string;
  poster: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const d = dialog.current;
    const v = video.current;
    if (!d) return;
    const opener = document.activeElement as HTMLElement | null;
    d.showModal();
    closeBtn.current?.focus();
    v?.play().catch(() => {
      /* autoplay with sound refused: native controls remain */
    });
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    d.addEventListener("cancel", onCancel);
    return () => {
      d.removeEventListener("cancel", onCancel);
      v?.pause();
      if (d.open) d.close();
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialog}
      aria-label={title}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
      className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-s7-abyss/85 backdrop:backdrop-blur-md"
    >
      <div
        className="flex h-full w-full items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative flex max-h-full flex-col items-center">
          <div className="s7-phone w-[min(86vw,calc((100dvh-7rem)*0.4615))]">
            <div className="s7-phone-screen">
              <video
                ref={video}
                src={src}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 font-display font-semibold text-s7-white">{title}</p>
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            className="absolute -right-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-s7-deep text-lg text-s7-white shadow-lg transition-colors hover:border-s7-sky-blue sm:-right-14 sm:top-0"
            aria-label={closeLabel}
          >
            ✕
          </button>
        </div>
      </div>
    </dialog>
  );
}
