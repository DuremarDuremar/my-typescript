export const horizontalScroll = (event: any) => {
  const delta = Math.max(
    -1,
    Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
  );
  event.currentTarget.scrollLeft -= delta * 20;
  //   event.preventDefault();
};
