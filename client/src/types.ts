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
<<<<<<< HEAD:src/types.ts
  RaspaScreen: undefined;
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string };
  AplicarColaScreen: undefined;
  Orbicushion: undefined;
  AutoclaveProd: undefined;
  ConfirmationAutoclave: { selectedValue: string; position: string; load: string; }; 
  MontagemProd: undefined;
  ConfirmationMontagem: { status: string; orderNumber: string; assemblyId: string };
=======
  ConfirmationEscareacaoScreen: { status: string; orderNumber: string; tireId: string };
  RaspaScreen: undefined; 
  ConfirmationRaspaScreen: { status: string; width: string; perimeter: string }; 
>>>>>>> main:client/src/types.ts
  AplicarBandaScreen: { status: string; width: string; perimeter: string };
  ExameFinalProd: undefined;
  ConfirmationExFinal: { status: string; date: string };
};
