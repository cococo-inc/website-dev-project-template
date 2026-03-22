"use client";

import { useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: 実際の送信処理（API Route または外部サービス）に置き換える
    // 例: fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    await new Promise((resolve) => setTimeout(resolve, 1000)); // デモ用の遅延

    setStatus("sent");
    setForm(initialState);
  };

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">
          お問い合わせを受け付けました
        </h3>
        <p className="text-green-700 text-sm">
          通常2営業日以内にご返答いたします。
          しばらくお待ちください。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium underline text-green-700 hover:text-green-900"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
  const focusStyle = { "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="山田 太郎"
            className={inputClass}
            style={focusStyle}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            会社名
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="株式会社〇〇"
            className={inputClass}
            style={focusStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="taro@example.com"
            className={inputClass}
            style={focusStyle}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            電話番号
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="03-0000-0000"
            className={inputClass}
            style={focusStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className={`${inputClass} bg-white`}
          style={focusStyle}
        >
          <option value="">選択してください</option>
          <option value="service">サービスについて</option>
          <option value="estimate">お見積りについて</option>
          <option value="support">サポートについて</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="ご相談内容をご記入ください"
          className={`${inputClass} resize-none`}
          style={focusStyle}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        送信することで、プライバシーポリシーに同意したものとみなします。
      </p>
    </form>
  );
}
