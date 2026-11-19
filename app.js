export const HEALTH_TOPICS = [
  {
    id: 'vacina-mito',
    title: 'Vacinas do SUS causam a própria doença?',
    verdict: 'BOATO (FALSO)',
    explanation: 'Vacinas usam fragmentos ou agentes inativados/atenuados seguros. Reações leves (dor local, febre baixa) são resposta normal de defesa.',
    source: 'Ministério da Saúde / PNI'
  },
  {
    id: 'agua-fervida',
    title: 'Ferver água ou usar hipoclorito 2,5% previne diarreia em área rural?',
    verdict: 'VERDADEIRO',
    explanation: 'Duas gotas de hipoclorito de sódio a 2,5% por litro de água, aguardando 30 minutos, eliminam microrganismos causadores de diarreia.',
    source: 'Ministério da Saúde / Vigidesastres'
  },
  {
    id: 'dengue-sinais',
    title: 'Dor abdominal intensa e vômitos persistentes na dengue exigem UPA imediata?',
    verdict: 'VERDADEIRO (SINAL DE ALARME)',
    explanation: 'São sinais de alarme para dengue grave. Procure a UBS ou UPA imediatamente e mantenha hidratação.',
    source: 'Protocolo Clínico MS — Dengue'
  }
];

export function searchTopics(query = '') {
  const q = query.trim().toLowerCase();
  if (!q) return HEALTH_TOPICS;
  return HEALTH_TOPICS.filter((t) =>
    t.title.toLowerCase().includes(q) || t.explanation.toLowerCase().includes(q)
  );
}
