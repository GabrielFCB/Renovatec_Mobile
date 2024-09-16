export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
  AutoclaveProd: undefined;
  MontagemProd: undefined;
  SenhaReset: undefined;
  Buttons: undefined;
  ExamScreen: undefined;
  EscareacaoScreen: undefined;
  ExameFinalProd: undefined;
  ProducaoScreen:undefined;
  ConfirmationExam: { status: string; orderNumber: string; tireId: string };
  ConfirmationEscareacaoScreen: { status: string; orderNumber: string; tireId: string };
  RaspaScreen: undefined; 
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string }; 
  AplicarBandaScreen: { status: string; width: string; perimeter: string };
  Orbicushion: undefined
  AplicarColaScreen: undefined
};
