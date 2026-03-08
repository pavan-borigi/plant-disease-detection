import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, Loader2, Image as ImageIcon, Sparkles, Leaf } from 'lucide-react';

const Detection: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'classifying' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<{ disease: string; confidence: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Workflow steps configuration
  const steps = [
    { id: 'uploading', label: 'Uploading image to server', icon: UploadCloud },
    { id: 'analyzing', label: 'Extracting leaf features', icon: ImageIcon },
    { id: 'classifying', label: 'Running AI diagnosis', icon: Sparkles },
    { id: 'success', label: 'Analysis complete', icon: CheckCircle2 }
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setStatus('idle');
      setResult(null);
      setErrorMessage('');
    }
  };

  const handleDetect = async () => {
    if (!image) return;
    setStatus('uploading');
    setResult(null);
    setErrorMessage('');

    try {
      // Simulate artificial workflow delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('analyzing');
      const formData = new FormData();
      formData.append('image', image);

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('classifying');

      const res = await fetch('https://plant-disease-detection-ys5e.onrender.com/api/detect', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 600));

      if (res.ok) {
        setStatus('success');
        setResult({ disease: data.result, confidence: data.confidence });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Detection failed.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error connecting to detection server.');
    }
  };

  const currentStepIndex = steps.findIndex(s => s.id === status) === -1 && status !== 'error' ? 0 : steps.findIndex(s => s.id === status);

  return (
    <section id="detection" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent py-24 px-4 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white shadow-sm rounded-2xl mb-4 border border-gray-100">
            <Leaf className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            AI Disease Diagnosis
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Upload a clear image of a plant leaf and our advanced machine learning model will instantly identify potential diseases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Image Upload & Preview */}
          <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              1. Select Image
            </h3>

            {!image ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-[400px] border-2 border-dashed border-white/20 hover:border-neon-cyan hover:bg-white/5 transition-all duration-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UploadCloud className="w-10 h-10 text-white/40 group-hover:text-neon-cyan transition-colors" />
                </div>
                <p className="text-lg font-medium text-white/90">Click to upload or drag and drop</p>
                <p className="text-sm text-white/40 mt-2">SVG, PNG, JPG or GIF (max. 10MB)</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            ) : (
              <div className="relative group rounded-2xl overflow-hidden shadow-sm h-[400px] bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <img
                  src={preview!}
                  alt="Leaf preview"
                  className="max-h-full max-w-full object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                  >
                    Change Image
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleDetect}
              disabled={!image || status !== 'idle'}
              className={`w-full mt-6 py-4 rounded-xl font-display text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2
                ${!image ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                  status !== 'idle' ? 'bg-emerald-100 text-emerald-500 cursor-wait' :
                    'bg-[#1F1F1F] hover:bg-black text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'}`}
            >
              {status !== 'idle' ? (
                <>Processing Analysis...</>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Analyze Leaf
                </>
              )}
            </button>
          </div>

          {/* Right Column: Workflow & Results */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Workflow Card */}
            <div className={`bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10 transition-all duration-500
                ${status === 'idle' ? 'opacity-50 grayscale pointer-events-none' : 'opacity-100 grayscale-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-6">
                2. Analysis Progress
              </h3>

              <div className="space-y-6">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isCompleted = currentStepIndex > index || status === 'success';
                  const isCurrent = status === step.id;

                  return (
                    <div key={step.id} className="relative flex items-center gap-4">
                      {/* Connecting Line */}
                      {index !== steps.length - 1 && (
                        <div className={`absolute top-10 left-5 w-[2px] h-8 -ml-[1px] transition-colors duration-500
                            ${isCompleted ? 'bg-neon-cyan' : 'bg-white/10'}`}
                        />
                      )}

                      {/* Icon Container */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative z-10
                          ${isCompleted ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan' :
                          isCurrent ? 'border-neon-cyan border-dashed text-neon-cyan scale-110 shadow-sm bg-black' :
                            'border-white/10 text-white/30 bg-black'}`}
                      >
                        {isCurrent ? <Loader2 className="w-5 h-5 animate-spin" /> : <StepIcon className="w-5 h-5" />}
                      </div>

                      {/* Label */}
                      <div className={`flex-1 transition-all duration-300
                          ${isCompleted ? 'text-white' :
                          isCurrent ? 'text-neon-cyan font-medium' :
                            'text-white/40'}`}
                      >
                        {step.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Error State inside Workflow */}
              {status === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4">
                  <div className="mt-0.5 font-bold">!</div>
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}
            </div>

            {/* Results Card (Appears only on success) */}
            {status === 'success' && result && (
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-xl text-white animate-in zoom-in-95 fade-in duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold opacity-90">Diagnosis Result</h3>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-md">
                    High Confidence
                  </div>
                </div>

                <div className="mb-2 text-emerald-50 font-medium uppercase tracking-wider text-xs">Identified Condition</div>
                <div className="text-3xl font-display font-bold leading-tight mb-6">
                  {result.disease.replace(/_/g, ' ')}
                </div>

                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium opacity-90">Confidence Score</span>
                    <span className="text-2xl font-bold">{(result.confidence * 100).toFixed(1)}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>

                {result.disease.toLowerCase().includes('healthy') ? (
                  <p className="mt-6 text-sm text-emerald-50 leading-relaxed">
                    Great news! Your plant appears to be healthy. Continue with your current care routine to maintain its vitality.
                  </p>
                ) : (
                  <p className="mt-6 text-sm text-emerald-50 leading-relaxed">
                    We recommend isolating this plant and exploring targeted treatments for {result.disease.replace(/_/g, ' ').toLowerCase()} immediately.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detection;
