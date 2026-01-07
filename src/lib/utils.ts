import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type TargetsParam } from "animejs";
import { $ } from "animejs/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string | undefined) {
  if (!html) return "0 min read";
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();

  if (endDate) {
    let endMonth: string;
    let endYear: string;

    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }

    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }

  return `${startMonth} ${startYear}`;
}

export function isValidHover(event: PointerEvent) {
  return event.pointerType !== "touch";
}

type OnHoverStartEvent = (
  element: Element,
  event: PointerEvent,
) => void | OnHoverEndEvent;
type OnHoverEndEvent = (event: PointerEvent) => void;
type EventOptions = {
  // Use passive event listeners
  passive?: boolean;
  // Remove the event listener after the first event
  once?: boolean;
};

export function hover(
  targets: TargetsParam,
  onHoverStart: OnHoverStartEvent,
  options: EventOptions = {},
) {
  const elements = $(targets);
  const gestureAbortController = new AbortController();
  const eventOptions: AddEventListenerOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal,
  };
  const cancel = () => gestureAbortController.abort();

  const onPointerEnter = (enterEvent: PointerEvent) => {
    if (!isValidHover(enterEvent)) return;

    const { target } = enterEvent;
    const onHoverEnd = onHoverStart(target as Element, enterEvent);

    if (typeof onHoverEnd !== "function" || !target) return;

    const onPointerLeave = (leaveEvent: PointerEvent) => {
      if (!isValidHover(leaveEvent)) return;

      onHoverEnd(leaveEvent);
      target.removeEventListener(
        "pointerleave",
        onPointerLeave as EventListener,
      );
    };

    target.addEventListener(
      "pointerleave",
      onPointerLeave as EventListener,
      eventOptions,
    );
  };

  elements.forEach((element) => {
    element.addEventListener(
      "pointerenter",
      onPointerEnter as EventListener,
      eventOptions,
    );
  });

  return cancel;
}
