// Definição do RootStackParamList para todas as telas do seu aplicativo
export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
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
  Orbicushion: undefined;
  ////Corte de Banda////

  ////Aplicacao de Banda////
  AplicarBandaScreen: { status: string; width: string; perimeter: string };
  ////Montagem////
  MontagemProd: undefined;
  ////Autoclave////
  AutoclaveProd: undefined;
  ConfirmationAutoclave: { selectedValue: string; position: string; load: string };
  ////Exame Final////
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
