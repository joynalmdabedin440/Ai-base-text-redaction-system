# 🛡️ RedactAI - Intelligent Cybersecurity Redaction System

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-v18.2.0-blue)
![Gemini API](https://img.shields.io/badge/Powered%20by-Gemini%202.5%20Flash-orange)
![Status](https://img.shields.io/badge/status-Hackathon%20Submission-green)

**RedactAI** is a cutting-edge privacy protection tool designed for the **Cybersecurity Hackathon**. It leverages the power of **Google Gemini AI** combined with high-precision regex algorithms to automatically detect and redact sensitive information from unstructured text data while preserving readability and context.

---

## 🚀 Key Features

*   **Hybrid Detection Engine**: Combines **Generative AI (Gemini 2.5/3.0)** for context-aware entities (Names, Locations) with **Regex** for structured data (IPs, Emails, Credit Cards).
*   **Progressive Redaction**: Delivers instant results via local processing while the AI performs deep analysis in the background.
*   **Dual Redaction Modes**:
    *   **Mask Mode**: Replaces sensitive data with entity placeholders (e.g., `[PERSON]`, `[DATE]`).
    *   **Remove Mode**: Cleanly excises data and collapses whitespace for a seamless reading experience.
*   **Accuracy Evaluation Suite**:
    *   Upload "Ground Truth" (Expected Output) files to test system performance.
    *   **Levenshtein Similarity Scoring**: Mathematically quantifies the accuracy of the redaction.
    *   **Visual Diff Comparison**: Side-by-side view highlighting exact mismatches between actual and expected output.
*   **Comprehensive Entity Support**: Detects PERSON, LOCATION, EMAIL, IP_ADDRESS, PHONE, CREDIT_CARD, DATE_TIME, and URL.

---

## 📸 Screenshots

| **Workspace Dashboard** | **Accuracy Evaluation** |
|:---:|:---:|
| ![Workspace Dashboard](https://via.placeholder.com/600x350?text=Workspace+Dashboard+Preview) | ![Evaluation Mode](https://via.placeholder.com/600x350?text=Accuracy+Diff+Preview) |
| *Real-time redaction and entity visualization* | *Side-by-side diff comparison with ground truth* |

---

## 🛠️ Technology Stack

*   **Frontend**: React.js (TypeScript)
*   **Styling**: Tailwind CSS
*   **AI Engine**: Google Gemini API (`@google/genai` SDK)
*   **Visualization**: Recharts (for accuracy graphs)
*   **Icons**: Lucide React
*   **Diffing Algorithm**: Custom Longest Common Subsequence (LCS) implementation

---

## ⚙️ Installation & Setup

Follow these steps to run RedactAI locally.

### Prerequisites

*   **Node.js** (v16 or higher)
*   **npm** or **yarn**
*   **Google Gemini API Key** (Get one at [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/redact-ai.git
cd redact-ai
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure API Key

Create a `.env` file in the root directory and add your Google API key.

```env
# .env
REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
```
*(Note: If using Vite, prefix with `VITE_`, e.g., `VITE_API_KEY`)*

### 4. Run the Application

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📖 Usage Guide

### Workspace Tab
1.  **Input Text**: Paste text directly or upload a `.txt` file.
2.  **Configuration**:
    *   **Mode**: Choose "Replace" (Mask) or "Remove".
    *   **Accuracy**: Toggle "High Accuracy" to use the stronger `Gemini 3.0 Pro` model (slower but more precise) or keep "Standard" for `Gemini 2.5 Flash`.
3.  **Process**: Click "Run Redaction Engine". Regex results appear instantly; AI results refine the output shortly after.
4.  **Review**: Check the "Detected Entities" table to see exactly what was found.

### Evaluation Tab
1.  **Prerequisite**: Run a redaction in the Workspace first.
2.  **Upload Ground Truth**: Upload the "Expected Output" text file that represents the perfect redaction.
3.  **Test Accuracy**: Click the button to calculate the score.
4.  **Analyze**:
    *   **Pie Chart**: Shows the percentage match.
    *   **Diff View**:
        *   <span style="color: #ef4444">Red Highlight</span>: Text that is in your output but shouldn't be (Under-redaction or formatting error).
        *   <span style="color: #10b981">Green Highlight</span>: Text that was expected but is missing (Over-redaction).

---

## 🧪 Testing with Sample Data

We have provided a sample dataset in the `samples/` folder (if available) or you can use the default text loaded in the app.

**Example Input:**
> John Smith called from (212) 555-1234 on 12/05/2024 regarding the breach.

**Expected Output (Mask Mode):**
> [PERSON] called from [PHONE_NUMBER] on [DATE_TIME] regarding the breach.

---

## 🤝 Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with ❤️ for the Cybersecurity Hackathon**
