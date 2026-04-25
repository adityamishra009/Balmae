export default function StudyHero() {
  return (
    <section
      style={{
        width: "100%",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f3f0ff, #ffeef3)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span
            style={{
              display: "inline-block",
              background: "#e6e2ff",
              color: "#5b4bff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            📘 Study
          </span>

          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Study Smart.
            <br />
            <span style={{ color: "#5b4bff" }}>Crack Big.</span>
          </h1>

          <p
            style={{
              color: "#555",
              marginBottom: "25px",
              fontSize: "16px",
              maxWidth: "500px",
            }}
          >
            Your one-stop destination for CUET, JEE, NCERT and everything you
            need to succeed.
          </p>

         <a
  href="https://www.youtube.com/@edtrategy"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    background: "#ff3b3b",
    color: "#fff",
    padding: "14px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "15px",
    marginBottom: "30px",
    
  }}
>
  ▶ Visit Edtrategy on YouTube
</a>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "10K+", label: "Students" },
              { value: "500+", label: "Notes" },
              { value: "100+", label: "Mock Tests" },
              { value: "50+", label: "PYQs" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <strong style={{ fontSize: "18px", color: "#111" }}>
                  {item.value}
                </strong>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "280px",
          }}
        >
          <img
            src="/atdhero.png"
            alt="study"
            style={{
              width: "100%",
              maxWidth: "420px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}