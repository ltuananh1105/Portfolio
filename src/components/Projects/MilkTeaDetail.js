import React from "react";
import { Link } from "react-router-dom";

const source = "https://github.com/ltuananh1105/QuanLyBanTraSuaQ2A";
const references = [
  ["Windows Forms interface", "tree/master/CuaHangTraSuaHKT"],
  ["Business logic", "tree/master/BUS"],
  ["Data access", "tree/master/DAO"],
  ["Data transfer objects", "tree/master/DTO"],
  ["SQL Server schema", "blob/master/scriptqlts.sql"],
];

export default function MilkTeaDetail() {
  return (
    <main className="editorial-page">
      <article className="editorial-shell editorial-narrow">
        <Link className="editorial-back" to="/project">← Back to Work</Link>
        <header className="editorial-intro reading-intro">
          <p className="editorial-eyebrow">Software &amp; Database</p>
          <h1>Milk Tea Shop Management System</h1>
          <p>C# WinForms · SQL Server · Layered Architecture</p>
        </header>
        <section className="editorial-section">
          <h2>Overview</h2>
          <p>A desktop shop-management project connecting a Windows Forms interface to account, table, product, and invoice data. It provides a supporting example of technical implementation and database structure alongside the portfolio’s Business Analysis work.</p>
        </section>
        <section className="editorial-section">
          <h2>Key Functions</h2>
          <ul>
            <li>Account login through the login form and business/data-access layers.</li>
            <li>Table listing, search, area grouping, and occupancy updates.</li>
            <li>Invoice records and details including products, quantities, prices, and totals.</li>
          </ul>
        </section>
        <section className="editorial-section">
          <h2>Architecture / Database</h2>
          <p>The project separates presentation in Windows Forms, business logic in BUS, data access in DAO, and data transfer objects in DTO. For example, the table-management business layer calls the data-access layer to retrieve table records.</p>
          <p>The SQL Server script defines tables including Ban, KhuVuc, SanPham, TaiKhoan, HoaDon, and ChiTietHoaDon, linking the interface to structured shop data.</p>
        </section>
        <section className="editorial-section">
          <h2>Technical Context</h2>
          <p>This presentation describes the inspected project implementation. Individual feature ownership has not been established, so these functions are presented at project level rather than as claims of sole authorship.</p>
        </section>
        <section className="editorial-section">
          <h2>Evidence</h2>
          <p>Source references support the functions and architecture described above. They are not a claim of production use or a new execution test.</p>
          <ul>{references.map(([label, path]) => <li key={path}><a href={source + "/" + path} target="_blank" rel="noopener noreferrer">{label} ↗</a></li>)}</ul>
          <div className="evidence-placeholder">
            <strong>REAL PROJECT SCREENSHOT REQUIRED</strong>
            <span>Milk Tea — WinForms Invoice Interface</span>
            <small>Show invoice line items and totals from the running project.</small>
          </div>
        </section>
      </article>
    </main>
  );
}
