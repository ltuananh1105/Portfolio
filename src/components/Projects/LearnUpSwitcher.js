import React, { useRef, useState } from "react";

// Remount local selection when the viewer or its tab group changes.
export default function LearnUpSwitcher({ id, label, items }) {
  const groupKey = JSON.stringify([id, items.map((item) => item.label)]);
  return <SwitcherTabs key={groupKey} id={id} label={label} items={items} />;
}

function SwitcherTabs({ id, label, items }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef([]);

  function handleKeyDown(event, index) {
    const next = {
      ArrowRight: (index + 1) % items.length,
      ArrowLeft: (index - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next].focus();
    tabs.current[next].scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  return <div className="lu-switcher">
    <div className="lu-tabs" role="tablist" aria-label={label}>
      {items.map((item, index) => <button
        key={item.label}
        ref={(element) => { tabs.current[index] = element; }}
        id={`${id}-tab-${index}`}
        type="button"
        className="lu-tab"
        role="tab"
        aria-selected={selected === index}
        aria-controls={`${id}-panel-${index}`}
        tabIndex={selected === index ? 0 : -1}
        onClick={() => setSelected(index)}
        onKeyDown={(event) => handleKeyDown(event, index)}
      >{item.label}</button>)}
    </div>
    {items.map((item, index) => <div
      key={item.label}
      id={`${id}-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${index}`}
      hidden={selected !== index}
      tabIndex={0}
      className="lu-tab-panel"
    >{selected === index ? item.content : null}</div>)}
  </div>;
}
