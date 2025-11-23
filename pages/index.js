import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Users, Zap, Rocket } from 'lucide-react';

export default function GensynHub() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [nodes, setNodes] = useState(1247);
  const [computePower, setComputePower] = useState(3.7);
  const [activeUsers, setActiveUsers] = useState(892);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 3));
      setComputePower(prev => +(prev + Math.random() * 0.1).toFixed(1));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
  }, []);

  const leaderboardData = [
    { rank: 1, name: "NodeMaster_42", contribution: 847, badge: "🏆" },
    { rank: 2, name: "AI_Trainer_99", contribution: 723, badge: "🥈" },
    { rank: 3, name: "ComputeKing", contribution: 691, badge: "🥉" },
    { rank: 4, name: "SwarmNode_Alpha", contribution: 654, badge: "⭐" },
    { rank: 5, name: "ML_Warrior", contribution: 589, badge: "⭐" }
  ];

  const models = [
    { name: "Vision Transformer V2", creator: "AI_Lab_42", compute: "234 GPU hours", likes: 156 },
    { name: "Language Model Beta", creator: "NLP_Master", compute: "892 GPU hours", likes: 203 },
    { name: "Diffusion Model Pro", creator: "GenArt_Dev", compute: "567 GPU hours", likes: 189 }
  ];

  const [calcHours, setCalcHours] = useState(100);
  const gensynCost = (calcHours * 0.45).toFixed(2);
  const cloudCost = (calcHours * 2.80).toFixed(2);
  const savings = ((1 - 0.45/2.80) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-pink-300 rounded-sm animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <header className="relative z-10 border-b-4 border-pink-300 bg-stone-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-300 relative" style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}></div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-wider" style={{
                fontFamily: 'monospace',
                textShadow: '4px 4px 0px rgba(245, 213, 213, 0.5)'
              }}>GENSYN</h1>
            </div>
            <div className="flex gap-2">
              <button className="px-4 md:px-6 py-3 bg-pink-300 text-stone-900 font-bold hover:bg-pink-400 transition-all transform hover:scale-105 border-2 border-stone-900 text-sm md:text-base">
                JOIN THE SWARM
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="relative z-10 bg-stone-800/50 backdrop-blur border-b-2 border-pink-300/30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {['dashboard', 'leaderboard', 'models', 'calculator'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-4 font-bold uppercase tracking-wider transition-all whitespace-nowrap text-sm md:text-base ${
                  activeTab === tab 
                    ? 'bg-pink-300 text-stone-900 border-2 border-stone-900' 
                    : 'text-pink-200 hover:bg-stone-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'monospace' }}>
                DECENTRALIZED ML COMPUTE
              </h2>
              <p className="text-xl md:text-2xl text-pink-200">Powering the Future of AI Training</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-stone-800/80 border-4 border-pink-300 p-6 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="w-10 h-10 text-pink-300" />
                  <span className="text-sm font-bold text-pink-300 animate-pulse">● LIVE</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{nodes}</div>
                <div className="text-pink-200 uppercase tracking-wide">Active Nodes</div>
              </div>

              <div className="bg-stone-800/80 border-4 border-pink-300 p-6 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-10 h-10 text-pink-300" />
                  <span className="text-sm font-bold text-pink-300 animate-pulse">● LIVE</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{computePower} PF</div>
                <div className="text-pink-200 uppercase tracking-wide">Compute Power</div>
              </div>

              <div className="bg-stone-800/80 border-4 border-pink-300 p-6 transform hover:scale-105 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-10 h-10 text-pink-300" />
                  <span className="text-sm font-bold text-pink-300 animate-pulse">● LIVE</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{activeUsers}</div>
                <div className="text-pink-200 uppercase tracking-wide">Active Users</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 p-6 md:p-8 border-4 border-stone-900 text-stone-900">
                <Rocket className="w-12 h-12 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Start Computing</h3>
                <p className="mb-4 text-stone-800">Run your first ML training job on the decentralized network</p>
                <button className="px-6 py-3 bg-stone-900 text-pink-300 font-bold hover:bg-stone-800 transition-all">
                  GET STARTED →
                </button>
              </div>

              <div className="bg-stone-800/80 border-4 border-pink-300 p-6 md:p-8">
                <Activity className="w-12 h-12 mb-4 text-pink-300" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Run a Node</h3>
                <p className="mb-4 text-pink-200">Contribute compute power and earn rewards</p>
                <button className="px-6 py-3 bg-pink-300 text-stone-900 font-bold hover:bg-pink-400 transition-all">
                  SETUP NODE →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                TOP CONTRIBUTORS
              </h2>
              <p className="text-lg md:text-xl text-pink-200">Community Leaders of the Swarm</p>
            </div>

            <div className="bg-stone-800/80 border-4 border-pink-300 overflow-hidden overflow-x-auto">
              <div className="bg-pink-300 px-6 py-4 grid grid-cols-4 gap-4 font-bold text-stone-900 uppercase tracking-wide border-b-4 border-stone-900 min-w-max md:min-w-0">
                <div>Rank</div>
                <div>Contributor</div>
                <div>GPU Hours</div>
                <div>Badge</div>
              </div>
              {leaderboardData.map((user, idx) => (
                <div 
                  key={user.rank}
                  className={`px-6 py-6 grid grid-cols-4 gap-4 items-center border-b-2 border-pink-300/20 hover:bg-stone-700/50 transition-all min-w-max md:min-w-0 ${
                    idx === 0 ? 'bg-yellow-900/20' : ''
                  }`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-pink-300">{user.rank}</div>
                  <div className="font-mono text-base md:text-lg">{user.name}</div>
                  <div className="text-xl md:text-2xl font-bold">{user.contribution}</div>
                  <div className="text-2xl md:text-3xl">{user.badge}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="px-6 md:px-8 py-4 bg-pink-300 text-stone-900 font-bold text-lg md:text-xl hover:bg-pink-400 transition-all transform hover:scale-105">
                VIEW FULL LEADERBOARD
              </button>
            </div>
          </div>
        )}

        {activeTab === 'models' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                COMMUNITY MODELS
              </h2>
              <p className="text-lg md:text-xl text-pink-200">AI Models Trained on Gensyn</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model, idx) => (
                <div key={idx} className="bg-stone-800/80 border-4 border-pink-300 overflow-hidden hover:border-pink-400 transition-all transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-pink-300/20 to-stone-700 flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{model.name}</h3>
                    <p className="text-pink-200 mb-4">by {model.creator}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-pink-300">{model.compute}</span>
                      <span className="font-bold">❤️ {model.likes}</span>
                    </div>
                    <button className="w-full mt-4 px-4 py-3 bg-pink-300 text-stone-900 font-bold hover:bg-pink-400 transition-all">
                      VIEW MODEL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                COST CALCULATOR
              </h2>
              <p className="text-lg md:text-xl text-pink-200">See How Much You Save</p>
            </div>

            <div className="bg-stone-800/80 border-4 border-pink-300 p-6 md:p-8">
              <div className="mb-8">
                <label className="block text-lg md:text-xl font-bold mb-4 text-pink-300">
                  GPU Hours Needed
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  value={calcHours}
                  onChange={(e) => setCalcHours(e.target.value)}
                  className="w-full h-4 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-pink-300"
                />
                <div className="text-center mt-4">
                  <span className="text-5xl md:text-6xl font-bold text-pink-300">{calcHours}</span>
                  <span className="text-xl md:text-2xl text-pink-200 ml-2">hours</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-pink-300 to-pink-400 p-6 border-4 border-stone-900 text-stone-900">
                  <div className="text-sm font-bold mb-2 uppercase tracking-wide">Gensyn Network</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">${gensynCost}</div>
                  <div className="text-sm opacity-75">Decentralized compute</div>
                </div>

                <div className="bg-stone-700 p-6 border-4 border-stone-600">
                  <div className="text-sm font-bold mb-2 uppercase tracking-wide text-pink-200">Traditional Cloud</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">${cloudCost}</div>
                  <div className="text-sm text-pink-200 opacity-75">AWS/GCP/Azure</div>
                </div>
              </div>

              <div className="text-center p-6 bg-green-900/50 border-4 border-green-500">
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  YOU SAVE {savings}% 🎉
                </div>
                <div className="text-lg md:text-xl text-green-300">
                  That's ${(cloudCost - gensynCost).toFixed(2)} in savings!
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="relative z-10 mt-20 border-t-4 border-pink-300 bg-stone-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-pink-200 font-bold tracking-wider text-sm md:text-base">
              POWERED BY THE SWARM • BUILT FOR THE COMMUNITY
            </p>
            <div className="mt-4 flex justify-center gap-4 md:gap-6 flex-wrap">
              <a href="#" className="text-pink-300 hover:text-pink-400 font-bold text-sm md:text-base">DOCS</a>
              <a href="#" className="text-pink-300 hover:text-pink-400 font-bold text-sm md:text-base">GITHUB</a>
              <a href="#" className="text-pink-300 hover:text-pink-400 font-bold text-sm md:text-base">DISCORD</a>
              <a href="#" className="text-pink-300 hover:text-pink-400 font-bold text-sm md:text-base">TWITTER</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
