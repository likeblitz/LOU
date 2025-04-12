export function calculateRotation(
  center: { x: number; y: number },
  point: { x: number; y: number }
): number {
  const deltaX = point.x - center.x;
  const deltaY = point.y - center.y;
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  return (angle + 90) % 360;
}