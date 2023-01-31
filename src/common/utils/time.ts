export function tempoParaMinutos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");
  const horaEmMinuto = Number(horas) * 60;
  const segundoEmMinuto = Number(segundos) / 60;

  return horaEmMinuto + segundoEmMinuto + Number(minutos);
}
