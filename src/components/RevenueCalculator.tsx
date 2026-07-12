import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const currency = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export default function RevenueCalculator() {
  const [sitesPerWeek, setSitesPerWeek] = useState(2);
  const [avgPrice, setAvgPrice] = useState(1500);
  const [maintenanceClients, setMaintenanceClients] = useState(4);
  const maintenanceFee = 150;

  const weeklyRevenue = useMemo(() => sitesPerWeek * avgPrice, [sitesPerWeek, avgPrice]);
  const maintenanceRevenue = useMemo(
    () => maintenanceClients * maintenanceFee,
    [maintenanceClients]
  );
  const monthlyRevenue = useMemo(
    () => weeklyRevenue * 4 + maintenanceRevenue,
    [weeklyRevenue, maintenanceRevenue]
  );

  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Um único projeto pode valer mais do que dezenas de{" "}
            <span className="text-gradient">pequenas vendas</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <div className="glass glow-border rounded-3xl p-6 sm:p-10">
            <div className="flex items-center gap-2.5 text-cyan">
              <Calculator className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Simulador de potencial de receita
              </span>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <label htmlFor="sitesPerWeek" className="text-muted">
                    Sites vendidos por semana
                  </label>
                  <span className="font-display font-bold text-paper">{sitesPerWeek}</span>
                </div>
                <input
                  id="sitesPerWeek"
                  type="range"
                  min={1}
                  max={10}
                  value={sitesPerWeek}
                  onChange={(e) => setSitesPerWeek(Number(e.target.value))}
                  className="w-full accent-cyan"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <label htmlFor="avgPrice" className="text-muted">
                    Valor médio por site
                  </label>
                  <span className="font-display font-bold text-paper">{currency(avgPrice)}</span>
                </div>
                <input
                  id="avgPrice"
                  type="range"
                  min={300}
                  max={6000}
                  step={100}
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full accent-cyan"
                />
              </div>

              <div className="sm:col-span-2">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <label htmlFor="maintenance" className="text-muted">
                    Clientes em manutenção mensal ({currency(maintenanceFee)}/cliente)
                  </label>
                  <span className="font-display font-bold text-paper">{maintenanceClients}</span>
                </div>
                <input
                  id="maintenance"
                  type="range"
                  min={0}
                  max={30}
                  value={maintenanceClients}
                  onChange={(e) => setMaintenanceClients(Number(e.target.value))}
                  className="w-full accent-cyan"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-muted">Receita semanal</p>
                <p className="mt-2 font-display text-2xl font-bold text-paper">
                  {currency(weeklyRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-muted">
                  Receita adicional (manutenção)
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-paper">
                  {currency(maintenanceRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-cyan/40 bg-gradient-to-br from-neon/15 to-violet/15 p-5 text-center shadow-[0_0_30px_rgba(0,191,255,0.15)]">
                <p className="text-xs uppercase tracking-wider text-cyan">Receita mensal estimada</p>
                <p className="mt-2 font-display text-3xl font-bold text-gradient">
                  {currency(monthlyRevenue)}
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-muted/80">
              Simulação ilustrativa. Resultados dependem da qualidade do serviço, preço,
              prospecção, negociação e execução de cada aluno.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
