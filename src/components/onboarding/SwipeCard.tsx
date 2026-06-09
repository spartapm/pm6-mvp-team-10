"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SwipeImage } from "@/lib/types";

const SWIPE_THRESHOLD = 80;

type SwipeCardProps = {
  image: SwipeImage;
  onLike: () => void;
  onDislike: () => void;
};

export default function SwipeCard({
  image,
  onLike,
  onDislike,
}: SwipeCardProps) {
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const isDraggingRef = useRef(false);

  const resetDrag = useCallback(() => {
    setOffsetX(0);
    setIsDragging(false);
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    resetDrag();
  }, [image.id, resetDrag]);

  const commitSwipe = useCallback(
    (direction: "like" | "dislike") => {
      setOffsetX(direction === "like" ? 400 : -400);
      if (direction === "like") onLike();
      else onDislike();
    },
    [onLike, onDislike],
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    setOffsetX(e.clientX - startX.current);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    const delta = e.clientX - startX.current;
    if (delta > SWIPE_THRESHOLD) {
      commitSwipe("like");
    } else if (delta < -SWIPE_THRESHOLD) {
      commitSwipe("dislike");
    } else {
      resetDrag();
    }
  };

  const rotation = offsetX * 0.05;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6 text-center text-lg font-bold leading-[30px] text-[rgba(0,0,0,0.6)]">
        <p>
          마음에 들면 <span className="text-black">오른쪽</span>으로
        </p>
        <p>
          별로예요는 <span className="text-black">왼쪽</span>으로
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-[328px] items-center justify-center">
        <div className="relative w-[276px]">
          <div
            className="absolute left-3 top-4 h-[412px] w-[265px] -rotate-[7.5deg] overflow-hidden rounded-[40px] opacity-40"
            style={{ backgroundColor: image.color }}
          >
            <Image
              src={image.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="265px"
            />
          </div>
          <div
            className="absolute left-12 top-2 h-[395px] w-[265px] rotate-[4deg] overflow-hidden rounded-[40px] opacity-60"
            style={{ backgroundColor: image.color }}
          >
            <Image
              src={image.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="265px"
            />
          </div>
          <div
            className="relative h-[412px] w-[276px] touch-none select-none overflow-hidden rounded-[40px] shadow-[0_4px_40px_rgba(0,0,0,0.25)]"
            style={{
              transform: `translateX(${offsetX}px) rotate(${-5 + rotation}deg)`,
              transition: isDragging ? "none" : "transform 0.2s ease-out",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={resetDrag}
          >
            <Image
              src={image.imageUrl}
              alt={image.label}
              fill
              className="pointer-events-none object-cover"
              sizes="276px"
              priority
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-lg font-bold text-[rgba(0,0,0,0.6)]">
        스와이프 해주세요
      </p>
    </div>
  );
}
