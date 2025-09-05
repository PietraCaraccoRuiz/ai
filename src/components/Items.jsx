import React from "react";

import Item from "./Item";

import HelmetImg from "../assets/Helmet.svg";
import ColeteImg from "../assets/Colete.svg";
import LuvaImg from "../assets/Luvas.svg";
import OculosImg from "../assets/Oculos.svg";
import FoneImg from "../assets/Fone.svg";
import BotasImg from "../assets/Botas.svg";

const Items = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Item
        item={HelmetImg}
        tooltip="Capacete de segurança: protege a cabeça contra impactos e objetos que possam cair durante o trabalho. Sempre use corretamente ajustado."
      />
      <Item
        item={ColeteImg}
        tooltip="Colete refletivo: aumenta a visibilidade do trabalhador em áreas de risco, especialmente em ambientes com baixa iluminação."
      />
      <Item
        item={LuvaImg}
        tooltip="Luva de proteção: protege as mãos contra cortes, abrasões e produtos químicos. Escolha o tipo adequado ao trabalho executado."
      />
      <Item
        item={OculosImg}
        tooltip="Óculos de proteção: protege os olhos contra poeira, partículas e respingos de líquidos. Deve ser ajustado corretamente ao rosto."
      />
      <Item
        item={FoneImg}
        tooltip="Protetor auricular: reduz o risco de perda auditiva em ambientes com ruído excessivo. Pode ser tipo plug ou abafador."
      />
      <Item
        item={BotasImg}
        tooltip="Botas de segurança: protegem os pés contra impactos, perfurações e escorregões. Devem ser resistentes e confortáveis para uso prolongado."
      />
    </div>
  );
};

export default Items;
