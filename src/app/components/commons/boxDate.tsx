import React from "react";

interface BoxDateManageProps {
  diaDeLaSemana: string;
  diaDelMes: number;
}

function BoxDate({ diaDelMes, diaDeLaSemana }: BoxDateManageProps) {
  return (
    <button className="bg-[#ffff] g p-2 rounded-xl text-center w-12 h-[60px] border-[1px] border-[#3D1DF3] text-[#3D1DF3]">
      <div className="text-sm font-semibold">{diaDeLaSemana}</div>
      <div className="text-lg font-bold">{diaDelMes}</div>
    </button>
  );
}

export default BoxDate;
