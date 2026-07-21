import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  CheckCircle2, 
  Loader2, 
  Send, 
  ShieldCheck, 
  Users, 
  TrendingDown 
} from "lucide-react";

// Schema de validação Zod
const formSchema = zod.object({
  name: zod.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  company: zod.string().min(2, { message: "Por favor, insira o nome da sua empresa." }),
  role: zod.string().min(2, { message: "Por favor, insira o seu cargo." }),
  phone: zod.string().min(10, { message: "Por favor, insira um telefone válido." }),
  email: zod.string().email({ message: "Por favor, insira um e-mail corporativo válido." }),
  travelCount: zod.string().min(1, { message: "Selecione a média de viagens por mês." }),
  mainPain: zod.string().min(10, { message: "Por favor, descreva brevemente sua principal dor ou desafio." })
});

type FormValues = zod.infer<typeof formSchema>;

export default function DiagnosticForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      phone: "",
      email: "",
      travelCount: "",
      mainPain: ""
    }
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    // Simular envio de API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Diagnóstico solicitado com sucesso! Nossa equipe entrará em contato em breve.");
  };

  return (
    <section id="diagnostico" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Elementos visuais de background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Conteúdo e Benefícios */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Diagnóstico de Viagens Gratuito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Sua empresa pode viajar melhor, gastar menos e ter mais controle.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Preencha o formulário e receba uma análise estratégica gratuita do perfil de viagens da sua organização, identificando oportunidades de economia e gargalos de controle.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <TrendingDown className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Análise de Economia Tarifária</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Identificamos oportunidades de redução de custos em passagens e hotéis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Mapeamento de Riscos e Compliance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Avaliamos a segurança jurídica, faturamento e prestação de contas fiscais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Otimização de Processos</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Redução do retrabalho operacional para os gestores e viajantes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Solicitação Recebida!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Obrigado por solicitar seu diagnóstico, <strong>{form.getValues("name")}</strong>. Nossa equipe de especialistas em gestão de viagens já está analisando seus dados e entrará em contato em até 24 horas úteis.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900"
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                  >
                    Enviar outra solicitação
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Nome */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }: { field: ControllerRenderProps<FormValues, "name"> }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-slate-300 text-xs font-semibold">Nome Completo</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />

                      {/* Empresa */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }: { field: ControllerRenderProps<FormValues, "company"> }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-slate-300 text-xs font-semibold">Empresa</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nome da empresa" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Cargo */}
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }: { field: ControllerRenderProps<FormValues, "role"> }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-slate-300 text-xs font-semibold">Seu Cargo</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ex: Diretor Financeiro" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />

                      {/* Telefone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }: { field: ControllerRenderProps<FormValues, "phone"> }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-slate-300 text-xs font-semibold">Telefone Corporativo</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(00) 00000-0000" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* E-mail */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }: { field: ControllerRenderProps<FormValues, "email"> }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-slate-300 text-xs font-semibold">E-mail Corporativo</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="seu.nome@empresa.com.br" 
                              className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Média de viagens */}
                    <FormField
                      control={form.control}
                      name="travelCount"
                      render={({ field }: { field: ControllerRenderProps<FormValues, "travelCount"> }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-slate-300 text-xs font-semibold">Quantidade média de viagens por mês</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-300 focus:ring-primary">
                                <SelectValue placeholder="Selecione uma faixa" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-950 border-slate-800 text-slate-300">
                              <SelectItem value="1-5">1 a 5 viagens por mês</SelectItem>
                              <SelectItem value="6-15">6 a 15 viagens por mês</SelectItem>
                              <SelectItem value="16-50">16 a 50 viagens por mês</SelectItem>
                              <SelectItem value="50+">Mais de 50 viagens por mês</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Principal Dor */}
                    <FormField
                      control={form.control}
                      name="mainPain"
                      render={({ field }: { field: ControllerRenderProps<FormValues, "mainPain"> }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-slate-300 text-xs font-semibold">Principal dor ou desafio atual na gestão de viagens</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ex: Falta de controle de custos, retrabalho operacional, suporte ineficiente de agências atuais, etc." 
                              className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary min-h-[100px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Botão de Envio */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processando Diagnóstico...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Solicitar Diagnóstico Gratuito
                        </>
                      )}
                    </Button>

                    <p className="text-[10px] text-center text-slate-500">
                      🔒 Seus dados estão protegidos sob a LGPD e serão utilizados exclusivamente para a elaboração do diagnóstico.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
