import mongoose, { Document, Model } from "mongoose";
mongoose.set("debug", true);

export interface IFuncionario extends Document {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
  dataAdmisao?: Date;
  dataDemisao?: Date;
  obsDemisao?: string;
  rua: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: boolean;
  salario: number;
}

/**
 * The versionKey is a property set on each document when first created by Mongoose.
 * This keys value contains the internal revision of the document.
 * The name of this document property is configurable. The default is __v
 */
const funcionarioSchema = new mongoose.Schema<IFuncionario>(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataAdmisao: { type: Date, required: false, default: Date.now },
    dataDemisao: { type: Date, required: false },
    obsDemisao: { type: String, required: false },
    rua: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    foto: { type: String, required: false },
    ativo: { type: Boolean, required: false, default: false },
    salario: { type: Number, required: true },
  },
  { versionKey: false }
);

const Funcionario: Model<IFuncionario> = mongoose.model<IFuncionario>(
  "funcionarios",
  funcionarioSchema
);

export default Funcionario;
