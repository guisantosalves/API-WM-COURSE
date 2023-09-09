import mongoose, { Document, Model, mongo } from "mongoose";
import { IFuncionario } from "./funcionario_model";
import Funcionario from "./funcionario_model";
import Cliente from "./cliente_model";
mongoose.set("debug", true);

export interface IServico extends Document {
  nome: string;
  descrição?: string;
  valor: number;
  tempoServico?: number;
  ativo: boolean;
  funcionario: typeof Funcionario | string;
  cliente: typeof Cliente | string;
  status: number; // 0 -> agendado / 1 -> em atendimento / 2 -> finalizado / 3 -> cancelado
}

const servicoSchema = new mongoose.Schema<IServico>({
  nome: { type: String, required: true },
  descrição: { type: String, required: false },
  valor: { type: Number, required: true },
  tempoServico: { type: Number, required: false },
  ativo: { type: Boolean, required: true },
  funcionario: { type: mongoose.Types.ObjectId, ref: "funcionarios" },
  cliente: { type: mongoose.Types.ObjectId, ref: "clientes" },
  status: { type: Number, required: true },
});

const Servico: Model<IServico> = mongoose.model<IServico>(
  "servicos",
  servicoSchema
);

export default Servico;
