import React from 'react';
import RedactionPanel from './components/RedactionPanel';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">RedactAI</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest -mt-1">An AI based redaction tool</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded">Team Super Saiyans</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-6 border border-indigo-500/20 mb-6">
             <h2 className="text-xl font-semibold text-white mb-2">The Redaction Challenge</h2>
             <p className="text-indigo-200 text-sm max-w-3xl">
                This tool automatically detect and redact sensitive information like Names, Locations, IPs, and Credit Cards from unstructured text while preserving context.
             </p>
           </div>
           
           <RedactionPanel />
        </div>
      </main>

       <footer className="border-t border-slate-800 mt-12 py-8 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
           <p>© 2025 RedactAI. Built for the Cybersecurity Hackathon Presidency University.</p>
           <p className="mt-2 text-xs"> • React • Tailwind</p>
         </div>
       </footer>
    </div>
  );
}

export default App;
