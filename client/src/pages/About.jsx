export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">👋 Xin chào, tôi là Mạnh!</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tôi là một <strong>Fullstack Developer</strong> yêu thích công nghệ web
        và AI. Mục tiêu của tôi là xây dựng các ứng dụng thực tế, thân thiện và
        có khả năng mở rộng.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        💼 Kinh nghiệm & Dự án
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Phát triển hệ thống quản lý quán Net bằng ASP.NET Core MVC.</li>
        <li>
          Xây dựng hệ thống chấm điểm trắc nghiệm OMR sử dụng YOLOv8 + Tesseract
          OCR.
        </li>
        <li>Tạo website Blog Portfolio fullstack (React + Express + MySQL).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">⚙️ Kỹ năng chính</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "React",
          "Node.js",
          "Express",
          "MySQL",
          "C#",
          ".NET MAUI",
          "Python",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">📫 Liên hệ</h2>
      <p>
        📧 Email:{" "}
        <a href="mailto:manhcopc@gmail.com" className="text-blue-600">
          manhcopc@gmail.com
        </a>
      </p>
      <p>
        🌐 GitHub:{" "}
        <a
          href="https://github.com/manhcopc"
          target="_blank"
          className="text-blue-600"
        >
          github.com/manhcopc
        </a>
      </p>
    </div>
  );
}
