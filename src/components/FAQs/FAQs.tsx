import style from "./styles/FAQs.module.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "@/components/icons/ChevronButton";
type FAQ = { id: string; question: string; answer: string };

const questions: FAQ[] = [
  {
    id: "q9",
    question: "¿Hay instrucciones especiales para usar FFX?",
    answer: `Deberías duplicar la dosis en tus primeros 2-3 tanques y luego usar una dosis por cada llenado después de eso. Para generadores, recomendamos 3-5 dosis dobles. Sigue las indicaciones de dosificación en el paquete de FFX. Vierte la cantidad sugerida directamente en tu tanque de gasolina. No viertas FFX en ninguna boquilla de bomba de gas de uso público. Para vehículos con mecanismos de seguridad o bloqueo en el cuello del llenado de combustible, como tapas, cubiertas o puertas de combustible, utiliza un embudo para verter FFX directamente en el tanque.`,
  },
  {
    id: "q10",
    question: "¿FFX afecta las garantías?",
    answer: `FFX no cambia las especificaciones del combustible (ver ASTM D975). Si FFX no cambia las especificaciones de combustible, no puede afectar las garantías. MyDailyChoice también mantiene un seguro para cualquier reclamo que pueda ocurrir por el uso del aditivo.
    `,
  },
  {
    id: "q1",
    question: "¿Cómo puedo reducir mis emisiones con FFX?",
    answer: `El compuesto organometálico utilizado en FFX se conoce como compuesto sándwich, que generalmente se clasifica como modificador de la velocidad de combustión para todo tipo de combustibles. El compuesto de ingrediente activo reduce el retraso en el encendido de la combustión y ayuda a eliminar la formulación de carbono existente en los componentes de combustión interna, lo que mejora la vida útil del motor, mejora la economía de combustible y reduce las emisiones.`,
  },
  {
    id: "q2",
    question: "¿Cuál es la relación de tratamiento para FFX?",
    answer: `Entre 1:5.000 a 1:10.000 (1 parte de FFX a 5.000 o 10.000 partes de combustible), según el tipo de combustible utilizado. Los combustibles pesados tendrán una relación de tratamiento más baja en comparación con los combustibles diésel, etanol o de 83-89 octanos No. 2.`,
  },
  {
    id: "q3",
    question: `¿FFX ayuda con la lubricación?`,
    answer: `FFX ayuda con la lubricación. En los combustibles más nuevos y bajos en azufre hay una falta de agente lubricante. Esto significa que los inyectores no reciben suficiente lubricación. FFX tiene un alto nivel de lubricidad, lo que ayuda a que el motor funcione durante más tiempo y de manera más eficiente, lo que reduce los problemas de mantenimiento.`,
  },
  {
    id: "q4",
    question: `¿Cómo puedo estar seguro de que el uso de FFX no hará que mi motor funcione mal?`,
    answer: `FFX se probó específicamente para garantizar el cumplimiento completo de los criterios de desempeño de las asociaciones de estándares aplicables. Esto incluye la Sociedad Americana de Tecnología y Materiales (ASTM).`,
  },
  {
    id: "q5",
    question: `¿Qué impacto tendrá el uso de FFX en los costos de mantenimiento y la expectativa de vida del motor?`,
    answer: `FFX fue formulado para reducir los sólidos, el agua, el óxido y la corrosión. Con sus detergentes y agentes lubricantes, ayudará a limpiar y proteger los tanques de combustible, las líneas de combustible, las bombas, los filtros y los inyectores. FFX también beneficia a las válvulas, pistones, anillos y cilindros del motor, ya que elimina la acumulación de carbono y aumenta significativamente la vida útil del motor.`,
  },
  {
    id: "q6",
    question: `¿Qué pasa si la gente no ve ninguna mejora en la economía de combustible de inmediato?`,
    answer: `Hay muchos factores que contribuyen a la economía de combustible del automóvil. Algunas personas pueden necesitar usar FFX durante un período de tiempo más largo según el tipo de motor, la antigüedad del vehículo y el mantenimiento. Los aumentos en la economía de combustible son solo uno de los beneficios de FFX. FFX es un producto con base científica que funciona siempre.`,
  },
  {
    id: "q7",
    question: `¿Qué impacto tendrá el uso de FFX en los costos de mantenimiento y la expectativa de vida del motor?`,
    answer: `FFX fue formulado para reducir los sólidos, el agua, el óxido y la corrosión. Con sus detergentes y agentes lubricantes, ayudará a limpiar y proteger los tanques de combustible, las líneas de combustible, las bombas, los filtros y los inyectores. FFX también beneficia a las válvulas, pistones, anillos y cilindros del motor, ya que elimina la acumulación de carbono y aumenta significativamente la vida útil del motor.`,
  },
  {
    id: "q8",
    question: `¿Cómo puedo estar seguro de que el uso de FFX no hará que mi motor funcione mal?`,
    answer: `FFX se probó específicamente para garantizar el cumplimiento completo de los criterios de desempeño de las asociaciones de estándares aplicables. Esto incluye la Sociedad Americana de Tecnología y Materiales (ASTM).`,
  },
];

export const FAQs = () => {
  const [selected, setSelected] = useState<string>(null);

  const toggle = (i: string) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };

  return (
    <div id="faqs" className={style.faqs}>
      <h2 className={style.faqs_title}>FAQs</h2>
      {questions.map((question) => {
        return (
          <div className={style.faqs_wrapper} key={question.id}>
            <div
              className={style.faqs_question_container}
              onClick={() => toggle(question.id)}
            >
              <p className={style.faqs_question}>{question.question}</p>
              <div>
                <div className={style.faqs_icon}>
                  {selected === question.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </div>

            {selected === question.id && (
              <p className={style.faqs_answer}>{question.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
