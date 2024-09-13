export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
  Producao: undefined;
  SenhaReset: undefined;
  Buttons: undefined;
  ExamScreen: undefined;
  ConfirmationExam: { status: string; orderNumber: string; tireId: string };
  RaspaScreen: undefined; 
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string }; 
  AplicarColaScreen: undefined;
  Orbicushion: undefined;
  
  MontagemProd : undefined;
  ConfirmationMontagem: { status: string; orderNumber: string; assemblyId: string };
  AutoclaveProd: undefined;
  AplicarBandaScreen: { status: string; width: string; perimeter: string };
  ExameFinalProd: undefined;
};
