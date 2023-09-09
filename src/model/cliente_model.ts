import mongoose, { version, Document, Model } from "mongoose";
mongoose.set("debug", true);

export interface ICliente extends Document {
  nome: string;
  dataNascimento: Date;
  rua: string;
  obs?: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: boolean;
}

/**
 * The versionKey is a property set on each document when first created by Mongoose.
 * This keys value contains the internal revision of the document.
 * The name of this document property is configurable. The default is __v
 */

const clienteSchema = new mongoose.Schema<ICliente>(
  {
    nome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    rua: { type: String, required: true },
    obs: { type: String, required: false },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    foto: { type: String, required: false },
    ativo: { type: Boolean, default: true },
  },
  { versionKey: false }
);

const Cliente: Model<ICliente> = mongoose.model<ICliente>(
  "clientes",
  clienteSchema
);

export default Cliente;
