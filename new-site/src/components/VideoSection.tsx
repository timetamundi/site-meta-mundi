import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIDEO_SCRIPT = [
  {
    time: 0,
    duration: 15,
    scene: "Cena 1 — O Problema",
    narrative: "Empresas crescem, equipes viajam, eventos acontecem. Mas, sem gestão, as viagens viram fonte de retrabalho, custos altos e falta de controle.",
    image: "/img/airport_lounge_3e831e1d.jpg"
  },
  {
    time: 15,
    duration: 20,
    scene: "Cena 2 — A Solução",
    narrative: "A MetaMundi atua como parceira estratégica de viagens corporativas. Cuidamos da cotação, emissão, hospedagem, seguros, remarcações, relatórios, suporte e pós-venda.",
    image: "/img/business_meeting_c40f210d.jpg"
  },
  {
    time: 35,
    duration: 20,
    scene: "Cena 3 — Os Diferenciais",
    narrative: "Unimos atendimento humano, tecnologia, fornecedores confiáveis e inteligência de custos para entregar mais economia, segurança e organização.",
    image: "/img/first_class_b7282de2.jpg"
  },
  {
    time: 55,
    duration: 20,
    scene: "Cena 4 — A Prova",
    narrative: "Mais de 200 clientes já confiaram na MetaMundi, com mais de R$ 1 milhão em economia gerada para organizações de diversos setores.",
    image: "/img/modern_office_25ccd3de.jpg"
  },
  {
    time: 75,
    duration: 15,
    scene: "Cena 5 — O Convite",
    narrative: "MetaMundi. Viagens corporativas com gestão, cuidado e resultado. Fale com um especialista hoje mesmo.",
    image: "/img/plane_landing_2cb2f546.jpg"
  }
];

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 90) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    // Determinar cena atual com base no tempo
    const idx = VIDEO_SCRIPT.findIndex(
      (scene, i) => {
        const nextScene = VIDEO_SCRIPT[i + 1];
        return currentTime >= scene.time && (!nextScene || currentTime < nextScene.time);
      }
    );
    if (idx !== -1) {
      setCurrentSceneIdx(idx);
    }
  }, [currentTime]);

  const currentScene = VIDEO_SCRIPT[currentSceneIdx];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setCurrentSceneIdx(0);
    setIsPlaying(true);
  };

  const progressPercent = (currentTime / 90) * 100;

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-900 overflow-hidden relative">
      {/* Elementos visuais de background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Apresentação Institucional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight font-display">
            Conheça a MetaMundi em 90 segundos
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Assista à nossa simulação interativa de apresentação institucional e entenda como revolucionamos a gestão de viagens da sua empresa.
          </p>
        </div>

        {/* Player de Vídeo Simulado Premium */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden relative group">
          {/* Tela de Vídeo */}
          <div className="aspect-video relative overflow-hidden bg-black">
            {/* Imagem de Fundo da Cena */}
            <img
              src={currentScene.image}
              alt={currentScene.scene}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out filter brightness-50 group-hover:scale-105"
            />

            {/* Overlay de Áudio / Radar Simulado */}
            {isPlaying && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-slate-800 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>NARRADOR ATIVO</span>
              </div>
            )}

            {/* Overlay de Cena */}
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-800 text-xs text-slate-300 font-mono tracking-wider">
              {currentScene.scene}
            </div>

            {/* Legenda Dinâmica / Teleprompter no Centro Inferior */}
            <div className="absolute bottom-16 left-4 right-4 md:left-8 md:right-8 bg-slate-950/90 backdrop-blur-md border border-slate-800/80 p-4 rounded-lg shadow-lg">
              <p className="text-sm md:text-base text-white text-center font-medium leading-relaxed font-sans">
                "{currentScene.narrative}"
              </p>
            </div>

            {/* Botão Play Central Gigante (Quando Pausado) */}
            {!isPlaying && currentTime === 0 && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
                aria-label="Iniciar Apresentação"
              >
                <Play className="w-8 h-8 fill-primary-foreground ml-1" />
              </button>
            )}
          </div>

          {/* Barra de Progresso e Controles */}
          <div className="bg-slate-950 border-t border-slate-800 p-4">
            {/* Linha de Progresso */}
            <div className="w-full h-1 bg-slate-800 rounded-full mb-4 overflow-hidden relative cursor-pointer">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Botões de Controle */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-slate-900"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-300" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-slate-900"
                  onClick={handleRestart}
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <span className="text-xs text-slate-500 font-mono">
                  {String(Math.floor(currentTime / 60)).padStart(2, "0")}:
                  {String(currentTime % 60).padStart(2, "0")} / 01:30
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-slate-900"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <span className="text-[10px] text-slate-500 font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  90s NARRATIVOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
