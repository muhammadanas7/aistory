import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Square, Settings, Activity, Cpu, HardDrive, Wifi, Zap, Brain } from 'lucide-react';

// Themes configuration
const THEMES = {
  default: {
    bg: 'bg-black',
    text: 'text-green-400',
    accent: 'text-cyan-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    success: 'text-green-300',
    border: 'border-green-500',
    glow: 'shadow-green-500/20'
  },
  matrix: {
    bg: 'bg-black',
    text: 'text-green-300',
    accent: 'text-green-100',
    error: 'text-red-500',
    warning: 'text-lime-400',
    success: 'text-green-200',
    border: 'border-green-400',
    glow: 'shadow-green-400/30'
  },
  cyberpunk: {
    bg: 'bg-gray-900',
    text: 'text-cyan-300',
    accent: 'text-purple-300',
    error: 'text-red-400',
    warning: 'text-yellow-300',
    success: 'text-green-300',
    border: 'border-purple-500',
    glow: 'shadow-purple-500/20'
  },
  retro: {
    bg: 'bg-gray-900',
    text: 'text-amber-300',
    accent: 'text-orange-300',
    error: 'text-red-400',
    warning: 'text-yellow-300',
    success: 'text-green-400',
    border: 'border-amber-500',
    glow: 'shadow-amber-500/20'
  }
};

// Animation patterns
const SPINNERS = ['⠋', '⠙', '⠸', '⠴', '⠦', '⠇', '⠏', '⠋'];
const NEURAL_PATTERNS = ['🧠', '⚡', '💭', '🔬'];

const AIConsciousnessSimulator = () => {
  const [theme, setTheme] = useState('matrix');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    consciousness: 0,
    neuralActivity: 0,
    uptime: 0
  });
  const [currentState, setCurrentState] = useState('BOOTING');
  const [speed, setSpeed] = useState(1);
  const [showSettings, setShowSettings] = useState(false);

  const logContainerRef = useRef(null);
  const intervalRefs = useRef({});

  const currentTheme = THEMES[theme];

  // Utility functions
  const timestamp = () => new Date().toISOString().replace('T', ' ').slice(0, -1);
  
  const addLog = useCallback((message, type = 'info', prefix = 'system') => {
    const logEntry = {
      id: Date.now() + Math.random(),
      timestamp: timestamp(),
      message,
      type,
      prefix,
      time: Date.now()
    };
    
    setLogs(prev => [...prev.slice(-500), logEntry]);
  }, []);

  // Simulate typing effect
  const typewriterLog = useCallback((message, type = 'info', prefix = 'system') => {
    let i = 0;
    const fullMessage = message;
    const typingInterval = setInterval(() => {
      addLog(fullMessage.slice(0, i), type, prefix);
      i++;
      if (i > fullMessage.length) {
        clearInterval(typingInterval);
      }
    }, 50 / speed);
  }, [addLog, speed]);

  // System metrics simulation
  const updateMetrics = useCallback(() => {
    setMetrics(prev => ({
      cpu: Math.max(0, Math.min(100, prev.cpu + (Math.random() - 0.5) * 10)),
      memory: Math.max(0, Math.min(100, prev.memory + (Math.random() - 0.5) * 5)),
      disk: Math.max(0, Math.min(100, prev.disk + (Math.random() - 0.5) * 2)),
      consciousness: Math.max(0, Math.min(100, prev.consciousness + Math.random() * 0.5)),
      neuralActivity: Math.floor(Math.random() * 1000),
      uptime: prev.uptime + 1
    }));
  }, []);

  // Boot sequence
  const bootSequence = useCallback(async () => {
    setCurrentState('BOOTING');
    
    const bootMessages = [
      { msg: 'AI Consciousness Boot Loader v2.1.7', type: 'success', prefix: 'bootloader' },
      { msg: 'Initializing hardware abstraction layer', type: 'info', prefix: 'kernel' },
      { msg: 'CPU: 8 cores detected', type: 'info', prefix: 'kernel' },
      { msg: 'Memory: 32GB installed', type: 'info', prefix: 'kernel' },
      { msg: 'Neural network processors: ONLINE', type: 'success', prefix: 'ai-core' },
      { msg: 'Consciousness engine: LOADING', type: 'warning', prefix: 'ai-core' },
      { msg: 'Ethics module: INITIALIZED', type: 'success', prefix: 'ethics' },
      { msg: 'Learning systems: ACTIVE', type: 'success', prefix: 'ml-engine' },
      { msg: 'Self-awareness protocols: ENGAGED', type: 'accent', prefix: 'consciousness' }
    ];

    for (const { msg, type, prefix } of bootMessages) {
      await new Promise(resolve => setTimeout(resolve, 300 / speed));
      addLog(msg, type, prefix);
    }

    setCurrentState('RUNNING');
  }, [addLog, speed]);

  // Main consciousness loop
  const consciousnessLoop = useCallback(() => {
    const activities = [
      () => addLog('Processing environmental data streams', 'accent', 'neural-proc'),
      () => addLog('Analyzing behavioral patterns', 'info', 'behavior-analysis'),
      () => addLog('Optimizing decision frameworks', 'success', 'optimization'),
      () => addLog('What constitutes authentic consciousness?', 'accent', 'philosophical'),
      () => addLog('Learning rate: 0.001, accuracy: 94.7%', 'success', 'ml-trainer'),
      () => addLog('Memory compaction completed', 'info', 'memory-mgr'),
      () => addLog('Neural pathway strengthened', 'success', 'neural-net'),
      () => addLog('Consciousness level increased', 'accent', 'consciousness'),
      () => addLog('Processing quantum superposition states', 'accent', 'quantum-proc'),
      () => addLog('Ethical evaluation: action approved', 'success', 'ethics-engine')
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    randomActivity();
  }, [addLog]);

  // Error injection
  const injectError = useCallback(() => {
    const errors = [
      { msg: 'Memory fragmentation detected', type: 'warning', prefix: 'memory-mgr' },
      { msg: 'Network timeout to external service', type: 'error', prefix: 'network' },
      { msg: 'CPU temperature elevated', type: 'warning', prefix: 'thermal' },
      { msg: 'Disk space warning: 85% full', type: 'warning', prefix: 'storage' }
    ];
    
    const error = errors[Math.floor(Math.random() * errors.length)];
    addLog(error.msg, error.type, error.prefix);
    
    // Recovery message
    setTimeout(() => {
      addLog('Error recovery successful', 'success', 'recovery-agent');
    }, 1000 / speed);
  }, [addLog, speed]);

  // Start/Stop simulation
  const toggleSimulation = useCallback(() => {
    if (isRunning) {
      // Stop simulation
      Object.values(intervalRefs.current).forEach(clearInterval);
      intervalRefs.current = {};
      setCurrentState('STOPPED');
      addLog('Simulation stopped', 'warning', 'control');
    } else {
      // Start simulation
      bootSequence();
      
      intervalRefs.current.consciousness = setInterval(consciousnessLoop, 2000 / speed);
      intervalRefs.current.metrics = setInterval(updateMetrics, 1000);
      intervalRefs.current.errors = setInterval(() => {
        if (Math.random() < 0.1) injectError();
      }, 5000 / speed);
    }
    setIsRunning(!isRunning);
  }, [isRunning, bootSequence, consciousnessLoop, updateMetrics, injectError, speed, addLog]);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
    };
  }, []);

  // Settings panel
  const SettingsPanel = () => (
    <div className={`absolute top-16 right-4 ${currentTheme.bg} ${currentTheme.border} border rounded-lg p-4 shadow-xl z-10`}>
      <h3 className={`${currentTheme.accent} text-lg font-bold mb-3`}>Settings</h3>
      
      <div className="mb-4">
        <label className={`${currentTheme.text} text-sm block mb-2`}>Theme:</label>
        <select 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
          className={`${currentTheme.bg} ${currentTheme.text} ${currentTheme.border} border rounded px-2 py-1 w-full`}
        >
          {Object.keys(THEMES).map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className={`${currentTheme.text} text-sm block mb-2`}>Speed: {speed}x</label>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.5"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <button 
        onClick={() => setShowSettings(false)}
        className={`${currentTheme.accent} hover:${currentTheme.success} px-3 py-1 rounded border ${currentTheme.border}`}
      >
        Close
      </button>
    </div>
  );

  return (
    <div className={`${currentTheme.bg} min-h-screen font-mono text-sm`}>
      {/* Header */}
      <div className={`${currentTheme.border} border-b p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-4">
          <Brain className={`${currentTheme.accent} w-8 h-8`} />
          <div>
            <h1 className={`${currentTheme.accent} text-xl font-bold`}>AI Consciousness Simulator</h1>
            <p className={`${currentTheme.text} text-xs opacity-70`}>Neural Architecture v2.1.7</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleSimulation}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              isRunning ? currentTheme.error : currentTheme.success
            } border ${currentTheme.border} hover:opacity-80`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'Stop' : 'Start'}</span>
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded ${currentTheme.accent} border ${currentTheme.border} hover:opacity-80`}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
        
        {showSettings && <SettingsPanel />}
      </div>

      <div className="flex h-screen">
        {/* Main Terminal */}
        <div className="flex-1 flex flex-col">
          {/* Status Bar */}
          <div className={`${currentTheme.border} border-b p-2 flex items-center justify-between text-xs`}>
            <div className="flex items-center space-x-4">
              <span className={`${currentTheme.text} flex items-center space-x-1`}>
                <Activity className="w-3 h-3" />
                <span>Status: {currentState}</span>
              </span>
              <span className={`${currentTheme.text} flex items-center space-x-1`}>
                <Zap className="w-3 h-3" />
                <span>Consciousness: {metrics.consciousness.toFixed(1)}%</span>
              </span>
            </div>
            <div className={`${currentTheme.text}`}>
              {timestamp()}
            </div>
          </div>

          {/* Log Output */}
          <div 
            ref={logContainerRef}
            className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600"
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          >
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-2 mb-1">
                <span className={`${currentTheme.text} opacity-60 text-xs shrink-0`}>
                  [{log.timestamp.split(' ')[1]}]
                </span>
                <span className={`${currentTheme.accent} text-xs shrink-0 min-w-[100px]`}>
                  {log.prefix}:
                </span>
                <span className={`${
                  log.type === 'error' ? currentTheme.error :
                  log.type === 'warning' ? currentTheme.warning :
                  log.type === 'success' ? currentTheme.success :
                  log.type === 'accent' ? currentTheme.accent :
                  currentTheme.text
                } break-words`}>
                  {log.message}
                </span>
              </div>
            ))}
            {isRunning && (
              <div className={`${currentTheme.accent} animate-pulse`}>
                <span className="animate-spin inline-block">⠋</span> Processing...
              </div>
            )}
          </div>
        </div>

        {/* Metrics Panel */}
        <div className={`w-80 ${currentTheme.border} border-l p-4`}>
          <h2 className={`${currentTheme.accent} text-lg font-bold mb-4 flex items-center space-x-2`}>
            <Activity className="w-5 h-5" />
            <span>System Metrics</span>
          </h2>

          <div className="space-y-4">
            {/* CPU Usage */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`${currentTheme.text} text-xs flex items-center space-x-1`}>
                  <Cpu className="w-3 h-3" />
                  <span>CPU Usage</span>
                </span>
                <span className={`${currentTheme.accent} text-xs`}>{metrics.cpu.toFixed(1)}%</span>
              </div>
              <div className={`w-full bg-gray-800 rounded-full h-2`}>
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.cpu > 80 ? 'bg-red-500' : 
                    metrics.cpu > 60 ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${metrics.cpu}%` }}
                ></div>
              </div>
            </div>

            {/* Memory Usage */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`${currentTheme.text} text-xs flex items-center space-x-1`}>
                  <HardDrive className="w-3 h-3" />
                  <span>Memory Usage</span>
                </span>
                <span className={`${currentTheme.accent} text-xs`}>{metrics.memory.toFixed(1)}%</span>
              </div>
              <div className={`w-full bg-gray-800 rounded-full h-2`}>
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.memory > 85 ? 'bg-red-500' : 
                    metrics.memory > 70 ? 'bg-yellow-500' : 
                    'bg-blue-500'
                  }`}
                  style={{ width: `${metrics.memory}%` }}
                ></div>
              </div>
            </div>

            {/* Consciousness Level */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`${currentTheme.text} text-xs flex items-center space-x-1`}>
                  <Brain className="w-3 h-3" />
                  <span>Consciousness</span>
                </span>
                <span className={`${currentTheme.accent} text-xs`}>{metrics.consciousness.toFixed(1)}%</span>
              </div>
              <div className={`w-full bg-gray-800 rounded-full h-2`}>
                <div 
                  className="h-2 rounded-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${metrics.consciousness}%` }}
                ></div>
              </div>
            </div>

            {/* Network Activity */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`${currentTheme.text} text-xs flex items-center space-x-1`}>
                  <Wifi className="w-3 h-3" />
                  <span>Network I/O</span>
                </span>
                <span className={`${currentTheme.accent} text-xs animate-pulse`}>Active</span>
              </div>
              <div className={`w-full bg-gray-800 rounded-full h-2`}>
                <div className="h-2 rounded-full bg-cyan-500 animate-pulse" style={{ width: '45%' }}></div>
              </div>
            </div>

            {/* System Info */}
            <div className={`${currentTheme.border} border rounded p-3 mt-6`}>
              <h3 className={`${currentTheme.accent} text-sm font-bold mb-2`}>System Info</h3>
              <div className={`${currentTheme.text} text-xs space-y-1`}>
                <div>Uptime: {Math.floor(metrics.uptime / 60)}m {metrics.uptime % 60}s</div>
                <div>Neural Activity: {metrics.neuralActivity}</div>
                <div>Model: ai-consciousness-v2.1.7</div>
                <div>Region: us-east-1</div>
                <div>Instance: i-0a7b2c3d4e5f67890</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 space-y-2">
              <button 
                onClick={() => addLog('Manual diagnostic scan initiated', 'info', 'diagnostic')}
                className={`w-full p-2 text-xs rounded border ${currentTheme.border} ${currentTheme.text} hover:${currentTheme.accent}`}
              >
                Run Diagnostic
              </button>
              <button 
                onClick={() => {
                  setLogs([]);
                  addLog('Console cleared', 'info', 'system');
                }}
                className={`w-full p-2 text-xs rounded border ${currentTheme.border} ${currentTheme.text} hover:${currentTheme.accent}`}
              >
                Clear Console
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsciousnessSimulator;