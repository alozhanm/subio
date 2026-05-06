"use client";
import { useEffect, useState, useRef } from "react";

// Feb(4 cols) + Mar(4 cols) + Apr(4 cols) + May(~1 col partial) = 17 cols
// Feb 1 = Sunday, so weeks align nicely
const COLS = 17;
const ROWS = 7;
const COLORS = ["#E8E3D8", "#FDDBC9", "#FCBFA0", "#F4845F", "#E85D2F", "#C0392B"];

// Activity pattern:
// Feb cols 0-1: sparse (early feb)
// Feb cols 2-3: high activity (late feb spike)
// Mar cols 4-7: stable medium-high
// Apr cols 8-11: stable medium-high
// May cols 12-13: ~6 days only, partial activity
// cols 14-16: empty (future)
function generateGrid() {
  const grid: number[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: number[] = [];
    for (let c = 0; c < COLS; c++) {
      let level = 0;
      if (c <= 1) {
        // early feb — sparse
        level = Math.random() < 0.15 ? 1 : 0;
      } else if (c <= 3) {
        // late feb — high spike
        const rand = Math.random();
        level = rand < 0.05 ? 2 : rand < 0.25 ? 3 : rand < 0.6 ? 4 : 5;
      } else if (c <= 7) {
        // march — stable medium-high
        const rand = Math.random();
        level = rand < 0.1 ? 0 : rand < 0.25 ? 2 : rand < 0.6 ? 3 : rand < 0.85 ? 4 : 5;
      } else if (c <= 11) {
        // april — stable medium-high (slightly more consistent)
        const rand = Math.random();
        level = rand < 0.08 ? 0 : rand < 0.2 ? 2 : rand < 0.55 ? 3 : rand < 0.82 ? 4 : 5;
      } else if (c <= 13) {
        // may 1-6 — partial week, some cells empty (only first ~4 rows active for May 1-6)
        if (r <= 3) {
          const rand = Math.random();
          level = rand < 0.2 ? 0 : rand < 0.5 ? 2 : rand < 0.8 ? 3 : 4;
        } else {
          level = 0;
        }
      } else {
        // future — empty
        level = 0;
      }
      row.push(level);
    }
    grid.push(row);
  }
  return grid;
}

const GRID = generateGrid();

// Month label positions (col index where each month starts)
const MONTH_LABELS = [
  { label: "Feb", col: 0 },
  { label: "Mar", col: 4 },
  { label: "Apr", col: 8 },
  { label: "May", col: 12 },
];

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", "Sun"];
const CELL = 14;
const GAP = 3;

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

export default function RedditHeatmap() {
  const [visibleCols, setVisibleCols] = useState(0);
  const [statsActive, setStatsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let col = 0;
          const interval = setInterval(() => {
            col++;
            setVisibleCols(col);
            if (col >= COLS) {
              clearInterval(interval);
              setTimeout(() => setStatsActive(true), 200);
            }
          }, 75);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const posts = useCountUp(350, statsActive);
  const upvotes = useCountUp(9000, statsActive, 1400);
  const subs = useCountUp(29, statsActive, 1000);

  const colUnit = CELL + GAP;

  return (
    <div
      ref={ref}
      style={{
        background: "#F7F4EE",
        borderRadius: 16,
        padding: "22px 24px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Label */}
      <p style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 14 }}>
        Reddit activity — last 4 months
      </p>

      {/* Month labels */}
      <div style={{ marginLeft: 32, marginBottom: 4, position: "relative", height: 16 }}>
        {MONTH_LABELS.map(({ label, col }) => (
          <span
            key={label}
            style={{
              position: "absolute",
              left: col * colUnit,
              fontSize: 11,
              color: "#6B6B6B",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Grid + day labels */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <div style={{ display: "flex", gap: 4, alignItems: "flex-start", minWidth: "fit-content" }}>
        {/* Day labels */}
        <div style={{ display: "flex", flexDirection: "column", gap: GAP, paddingTop: 1 }}>
          {DAY_LABELS.map((d, i) => (
            <div
              key={i}
              style={{
                height: CELL,
                width: 26,
                fontSize: 10,
                color: "#6B6B6B",
                display: "flex",
                alignItems: "center",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Heatmap cells */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${CELL}px)`,
            gap: GAP,
          }}
        >
          {Array.from({ length: COLS }).map((_, c) =>
            Array.from({ length: ROWS }).map((_, r) => {
              const level = c < visibleCols ? GRID[r][c] : 0;
              return (
                <div
                  key={`${c}-${r}`}
                  style={{
                    width: CELL,
                    height: CELL,
                    borderRadius: 4,
                    background: COLORS[level],
                    transition: "background 0.35s ease",
                    gridColumn: c + 1,
                    gridRow: r + 1,
                  }}
                />
              );
            })
          )}
        </div>
      </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 18,
          paddingTop: 18,
          borderTop: "0.5px solid #E8E3D8",
        }}
      >
        {[
          { value: posts, label: "Posts published", suffix: "" },
          {
            value: upvotes >= 1000 ? Math.floor(upvotes / 1000) : upvotes,
            label: "Total upvotes",
            suffix: upvotes >= 1000 ? "K" : "",
          },
          { value: subs, label: "Subreddits active", suffix: "" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 22,
                fontWeight: 600,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
              }}
            >
              {s.value}{s.suffix}
            </div>
            <div style={{ fontSize: 11, color: "#6B6B6B", marginTop: 2 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
