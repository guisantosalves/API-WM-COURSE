import mongoose, { Document, Model, mongo } from "mongoose";
import { IFuncionario } from "./funcionario_model";
import Funcionario from "./funcionario_model";
import Cliente from "./cliente_model";
mongoose.set("debug", true);

export interface IServico extends Document {
  nome: string;
  descricao?: string;
  valor: number;
  tempoServico?: number;
  ativo: boolean; // default true
  funcionario: typeof Funcionario | string;
  cliente: typeof Cliente | string;
  status: number; // 0 -> agendado / 1 -> em atendimento / 2 -> finalizado / 3 -> cancelado
}

const servicoSchema = new mongoose.Schema<IServico>(
  {
    nome: { type: String, required: true }, // ok
    descricao: { type: String, required: false }, // ok
    valor: { type: Number, required: true }, // ok
    tempoServico: { type: Number, required: false }, // ok
    ativo: { type: Boolean, required: true }, // pula
    funcionario: { type: mongoose.Types.ObjectId, ref: "funcionarios" },
    cliente: { type: mongoose.Types.ObjectId, ref: "clientes" },
    status: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const Servico: Model<IServico> = mongoose.model<IServico>(
  "servicos",
  servicoSchema
);

export default Servico;
