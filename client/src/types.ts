// Definição do RootStackParamList para todas as telas do seu aplicativo
export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
  VisualizarPneusConcluidos: undefined;
  SenhaReset: undefined;
  Buttons: undefined;
  ////Exame Inicial////
  ExamScreen: { tireId: string };
  VisualizarExameInicial: undefined;
  ConfirmationExam: { status: string; orderNumber: string; tireId: string; ID_Pneu: bigint };
  ////Raspa////
  RaspaScreen: { tireId: string };
  VisualizarRaspa: undefined;
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string };
  ////Escareação////
  EscareacaoScreen: { tireId: string; };  
  VisualizarEscareacao: undefined;
  ConfirmationEscareacaoScreen: { status: string; tireId: string };
  ////Aplicacao de Cola////
  AplicacaoDeColaScreen: { tireId: string; };  
  VisualizarAplicacaoDeCola: undefined;
  ConfirmationAplicacaoDeCola: { status: string; tireId: string };
  ////Orbicushion////
  Orbicushion: { tireId: string; };
  ConfirmationOrbicushion: { status: string; tireId: string };
  VisualizarOrbicushion: { status: string; tireId: string };
  ////Corte de Banda////
  CorteDeBandaScreen: { status: string; tireId: string };
  VisualizarCorteDeBanda: { status: string; tireId: string };
  ConfirmationCorteDeBanda: { status: string; tireId: string };
  ////Aplicacao de Banda////
  AplicarBandaScreen: { tireId: string; status: string; width: string; perimeter: string };
  VisualizarAplicarBanda: {tireId: string; status: string; width: string; perimeter: string}
  ConfirmationAplicarBanda: { status: string; tireId: string };
  ////Montagem////
  MontagemProd: { tireId: string };
  VisualizarMontagem: {tireId: string; status: string;}
  ConfirmationMontagem: { status: string; tireId: string };
  ////Autoclave////
  AutoclaveProd: { status: string; tireId: string };
  VisualizarAutoclave: {tireId: string; status: string;};
  ConfirmationAutoclave: { selectedValue: string; position: string; load: string };
  ////Exame Final////
  ExameFinalProd: { status: string; tireId: string };
  ConfirmationExFinal: { status: string; date: string };
  VisualizarExameFinal: undefined;
};

// Definição do tipo para os dados da tabela Pneu
export type PneuItem = {
  ID_Pneu: bigint;  
  codigo_pneu: string;
  status: string;
  ID_Coleta: string;
  width: string; 
  perimeter: string; 
};
