export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#EEE9E1" }}
    >
      <div className="flex flex-col items-center gap-6">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#D7CEC4] border-t-[#725F56]" />

        <p
          className="text-lg font-medium"
          style={{ color: "#5A524A" }}
        >
          Loading...
        </p>

      </div>
    </div>
  );
}