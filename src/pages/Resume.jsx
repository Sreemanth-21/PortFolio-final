function Resume() {
  return (
    <div className="container mx-auto px-4 pt-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Resume</h2>
      <div className="max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-lg border border-white/30">
        <div className="text-center mb-8">
          <a
            href="https://drive.google.com/file/d/1SkmVPwdg8RqtxKXqkiSpEzMXUR20qGJ7/view?usp=drive_link"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
            <ul className="list-disc list-inside text-white">
            <li>Prompt Design in Vertex AI - Google</li>
            <li>Develop GenAI Apps with Gemini and Streamlit - Google</li>
            <li>Analyze Images with the Cloud Vision API - Google</li>
            <li>Python Essentials - Cisco</li>
            <li>Getting Started with Artificial Intelligence - IBM</li>
            <li>Certified in Tableau - Internshala</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
