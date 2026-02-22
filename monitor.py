# Simulador de Alerta de Sinais Vitais - UTI Neonatal
# Foco: Monitoramento de Frequência Cardíaca (FC) em RN

fc_neonatal = 175  # Simulação de valor lido no monitor

print(f"Monitorando FC Neonatal: {fc_neonatal} bpm")

if fc_neonatal < 120:
    print("⚠️ ALERTA: FC abaixo do normal para RN (Possível Bradicardia).")
elif fc_neonatal > 160:
    print("⚠️ ALERTA: FC acima do normal para RN (Possível Taquicardia).")
else:
    print("✅ FC dentro dos parâmetros de normalidade (120-160 bpm).")
