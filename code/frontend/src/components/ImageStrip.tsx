export default function ImageStrip() {
  return (
    <div className="relative h-[46vh] min-h-[320px] overflow-hidden">
      <img src="/images/flatlay-accessories.jpg" alt="Apple accessories laid out on a dark surface" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ground via-transparent to-transparent" />
    </div>
  );
}
