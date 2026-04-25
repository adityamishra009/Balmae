export default function Tabs({ activeTab, setActiveTab }: any) {
  const tabs = ["notes", "pyq", "mock"];

  return (
    <div style={{ display: "flex", gap: "25px", borderBottom: "1px solid #eee", paddingBottom: "10px",justifyContent: "center",}}>
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            cursor: "pointer",
            paddingBottom: "5px",
            borderBottom:
              activeTab === tab ? "2px solid #5b4bff" : "none",
            color: activeTab === tab ? "#5b4bff" : "#555",
          }}
        >
          {tab.toUpperCase()}
        </div>
      ))}
    </div>
  );
}