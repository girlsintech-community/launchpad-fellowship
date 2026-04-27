/**
 * Soft warm gradient blobs + grain overlay for depth on the cream theme.
 * Sits behind page content via fixed positioning + negative z-index.
 */
export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.14_38/0.18),transparent_70%)] blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.12_78/0.18),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.36_0.06_165/0.12),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />
    </div>
  );
}
