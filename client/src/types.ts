// Definição do RootStackParamList para todas as telas do seu aplicativo
export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
  SenhaReset: undefined;
  Buttons: undefined;
  ExamScreen: { tireId: string };  
  RaspaScreen: { tireId: string };
  VisualizarRaspa: undefined;
  EscareacaoScreen: undefined;
  ProducaoScreen: undefined;
  ConfirmationExam: { status: string; orderNumber: string; tireId: string; ID_Pneu: bigint };
  VisualizarExameInicial: undefined;
  AplicarColaScreen: undefined;
  Orbicushion: undefined;
  AutoclaveProd: undefined;
  ConfirmationAutoclave: { selectedValue: string; position: string; load: string };
  MontagemProd: undefined;
  ConfirmationEscareacaoScreen: { status: string; orderNumber: string; tireId: string };
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string };
  AplicarBandaScreen: { status: string; width: string; perimeter: string };
  ExameFinalProd: undefined;
  ConfirmationExFinal: { status: string; date: string };
};

// Definição do tipo para os dados da tabela Pneu
export type PneuItem = {
  ID_Pneu: bigint;  
  codigo_pneu: string;
  status: string;
  ID_Coleta: string;
};
