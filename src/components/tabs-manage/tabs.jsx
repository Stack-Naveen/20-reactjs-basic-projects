export default function Tabs({ tabsContent }) {
  return (
    <div className="container">
      <div className="title">
        {tabsContent.map(({ label }) => (
          <div>
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
